const mysql = require("mysql2");

class DB {
    private connection;

    constructor() {
        const pool = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "1229118"
        });
        this.connection = pool.promise();
    }

    public async getUsers() {
        const [rows] = await this.connection.query("SELECT * FROM `users`");
        return rows;
    }
}

(async () => {
    const data = await new DB().getUsers();
    console.log(data);
})()