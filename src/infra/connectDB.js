import mysql from 'mysql';

//Objeto que contém as configurações de conexão com o banco MySQL
const dbConfig = {
    host : "localhost",
    user : "root",
    password : "",
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

export default connection;