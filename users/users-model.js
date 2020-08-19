const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findByDepartment,
    findById,
};

function find() {
    return db("users").select("id", "username").orderBy("id");
}

function findByDepartment(department) {
    return db("users")
        .where(department)
}

async function add(user) {
    return db("users")
        .insert(user, "id")
        .then(id => {
            return findById(id);
        })
        .catch(error =>{
            return error;
        })
}

function findById(id) {
    return db("users").where({ id }).first();
}
