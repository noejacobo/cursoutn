var express = require('express');
var router = express.Router();
var productosModel = require ('./../../models/productosModel');
var util = require ('util');
var cloudinary = require ('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/*GET home page.*/
router.get('/', async function (req, res, next) {

    var productos 
        if(req.query.qu === undefined)
        {
            productos = await productosModel.getProductos();
        }
        else{
            productos = await productosModel.buscarProductos(req.query.qu);
        }

    productos = productos.map(producto => {
        if (producto.imagen_id){
          const imagen = cloudinary.image(producto.imagen_id,{
            width:100,
            height:100,
            crop:'fill'
          });
          return{
            ...producto,
            imagen
          }
        }else{
          return{
            ...producto,
            imagen:''
          }
        }
      });

    res.render('admin/productos',{
        layout:'admin/layout',
        usuario:req.session.nombre,
        productos,
        is_search: req.query.qu!==undefined,
        qu: req.query.qu
    });
});
    

   
      
/*
  res.render('admin/novedades',{
      layout:'admin/layout',
      usuario: req.session.nombre,
      novedades
    });
});

*/
router.get('/eliminar/:id', async (req,res,next) => {
    var id = req.params.id;

    /*let producto= await productosModel.getProductoById(id);
    if(producto.img_id){
        await(destroy(producto.img_id));
    }*/

    await productosModel.deleteProductosById(id);
    res.redirect('/admin/productos')
});


router.get('/prodagregar', (req, res, next)=> {
    res.render('admin/prodagregar',{
        layout:'admin/layout'
      });
  });

router.post('/prodagregar', async (req, res, next)=>{
  
      var imagen_id = '';
      if (req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          imagen_id = (await uploader(imagen.tempFilePath)).public_id;
      }
      try{
          if(req.body.prodnombre != "" && req.body.prodvarietal != ""){
              await productosModel.insertProducto({
                  ...req.body,
                  imagen_id
              });
              res.redirect('/admin/productos')
          }
          else{
              res.render('admin/prodagregar',{
                  layout: 'admin/layout',
                  error: true,
                  message: 'Todos los campos son requeridos'
              })
          }
      }
      catch(error) {
          console.log(error)
          res.render('admin/prodagregar',{
              layout: 'admin/layout',
              error: true,
              messsage: 'No se cargo la novedad'
          });
      }
  });
  
/*
router.get ('/modificar/:id', async (req,res,next)=>{
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar',{
        layout: 'admin/layout',
        novedad
    });
});

router.post('/modificar', async (req, res, next) =>{
    try{
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete ==="1"){
            img_id = null;
            borrar_img_vieja = true;
        }else{
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }

        
        }
        if (borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }


        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        }
        
        console.log(obj)
        await novedadesModel.modificarNovedadById(obj,req.body.id);
        res.redirect ('/admin/novedades');
    }
    catch (error){
        console.log(error)
        res.render('admin/modificar',{
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la novedad'
        })
    }
});

*/

module.exports = router;
