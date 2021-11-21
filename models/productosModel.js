var pool= require ('./bd');

async function getProductos(){
    var query = "select * from productos order by id desc";
    var rows = await pool.query(query);
    return rows;}

/*para borrar productos*/
async function deleteProductosById(id){
    var query = "delete from productos where id = ?";
    var rows = await pool.query (query, [id]);
    return rows;
}

/*para insertar productos*/
async function insertProducto(obj){
    try{
    var query = "insert into productos set ?";
    var rows = await pool.query (query, [obj]);
    return rows;
}
catch(error){
    console.log(error);
    throw error;
}
}

/*buscador*/
async function buscarProductos (busqueda){
    var query = "select * from productos where nombre like ? OR varietal like ?";
    var rows = await pool.query (query,['%'+busqueda+'%','%'+busqueda+'%']);
    return rows;
}
    module.exports = {getProductos,deleteProductosById,insertProducto,buscarProductos}

