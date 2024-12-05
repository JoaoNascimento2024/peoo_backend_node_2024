import mysql from 'mysql';
import util from "util";

//Objeto que contém as configurações de conexão com o banco MySQL
const dbConfig = {
    host : "localhost",
    user : process.env.USER_DB || "root",
    password :process.env.PASSWORD_DB || "",
    database : "task_manager"
};

//Cria objeto de conexão
const connection = mysql.createConnection(dbConfig);

//Tenta abrir a conexão com o banco
connection.connect((error) => {
    if (error){
        console.log("Errro na conexão com o banco: ", error.message);
        process.exit(1);
    }
    console.log("Conexão realizada com sucesso");
})

//Transforma o método query do objeto connection em promise
connection.query = util.promisify(connection.query).bind(connection);

export default connection;