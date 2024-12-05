import connection from "./dbConnect.js";

const DBInterface = {
    async query(sql, params) {
        try {
            const results = await connection.query(sql, params);
            return results;
        }catch(err){
            console.error("Erro no banco de dados: ", err.message);
            throw err;
        }
    }
};

export default DBInterface;

