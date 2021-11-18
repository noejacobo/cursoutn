var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require ('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function (req, res, next) {




  var novedades = await novedadesModel.getNovedades();


  novedades= novedades.splice(0,5); //seleccionamos los primeros 5 elementos del array
  novedades= novedades.map(novedad => { //map es un modo 
    if (novedad.img_id){
      const imagen = cloudinary.url(novedad.img_id,{
        width:160,
        crop:'fill'
      });
      return{
        ...novedad,
        imagen
      }
    }else{
      return{
        ...novedad,
        imagen:'/images/noimage.jpg'
      }
    }
  });







  res.render('index', {novedades
  });
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var gridRadios = req.body.gridRadios;
  var comment = req.body.comment;

  //console.log(req.body);

  var obj = {
    to: 'noe.jacobo@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " se contacto para solicitar mas informacion a este correo " + email + " dejando el comentario " + comment + 
    ". Y su telefono es " + tel + ". Y su producto de interes es " + gridRadios
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }


  })

  var info = await transporter.sendMail(obj);

  res.render('index', { message: 'Mensaje enviado' });
  //como puedo hacer para que me lleve a ese sector del index cuando recarga la pagina??



});//cierra peticion del post


module.exports = router;