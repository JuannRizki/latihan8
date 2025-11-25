const db = require('./db.config.js');

const Product = {
    getAll: (callback) => {
        const sql = "SELECT * FROM product";
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = "SELECT * FROM product WHERE id = ?";
        db.query(sql, [id], callback);
    },

    create: (data, callback) => {
        const sql = "INSERT INTO product (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)";
        db.query(
            sql,
            [data.nama, data.deskripsi, data.harga, data.foto],
            callback
        );
    },

    update: (id, data, callback) => {
        const sql =
            "UPDATE product SET nama=?, deskripsi=?, harga=?, foto=? WHERE id=?";
        db.query(
            sql,
            [data.nama, data.deskripsi, data.harga, data.foto, id],
            callback
        );
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM product WHERE id=?";
        db.query(sql, [id], callback);
    },
};

module.exports = Product;