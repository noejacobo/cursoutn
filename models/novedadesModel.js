var pool = require ('./bd');

async function getNovedades(){
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}
/*para borrar novedades*/
async function deleteNovedadesById(id){
    var query = "delete from novedades where id = ?";
    var rows = await pool.query (query, [id]);
    return rows;
}

/*para insertar novedades*/
async function insertNovedad(obj){
    try{
    var query = "insert into novedades set ?";
    var rows = await pool.query (query, [obj]);
    return rows;
}
catch(error){
    console.log(error);
    throw error;
}
}

/*para modificar novedades por id*/ 
/*para modificar a que busque la novedad por id */
async function getNovedadById(id){
    var query = "select * from novedades where id = ?";
    var rows = await pool.query (query, [id]);
    return rows[0];
}


/*para que haga el update*/
async function modificarNovedadById(obj,id){
    try{
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query(query,[obj,id]);
        return rows;
    }catch(error){
        throw error;
    }
}

/*buscador*/


module.exports = {getNovedades,deleteNovedadesById,insertNovedad,getNovedadById,modificarNovedadById}
