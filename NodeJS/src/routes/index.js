const productrouter=require('./product')
const detailrouter=require('./detail')
const loginrouter=require('./login')
const messrouter=require('./mess')
const signuprouter=require('./signup')
const Airouter=require('./Ai')
const homerouter=require('./home')
const Approuter=require('./App')
const costumerouter=require('./costume')
const ecommercerouter=require('./ecommerce')
const Gamerouter=require('./Game')
const donaterouter=require('./donate')
const createrouter=require('./create')
const storerouter=require('./store')
const datauserrouter=require('./datauser')
const merouter=require('./me')
const User = require('../app/models/user');
const create_project = require('./create_project');
const post_project_created = require('./post_project_created');
const profile = require('./profile');
const conversationrouter=require("./conversations")
const messagerouter=require("./messages")
const initPassportLocal = require("../app/auth/passportLocal");
const wallet = require('./wallet');

function route(app){
   

    app.use('/wallet' , wallet);

    app.use('/profile' , profile);

    app.use('/post_project_created' , post_project_created);

    app.use('/create_project' , create_project);

    app.use('/product',productrouter);
    app.use('/mess',messrouter);
    app.use('/conversation',conversationrouter)
    app.use('/message',messagerouter)

    app.get('/homepage', (req, res, next) => {
      res.render('homepage',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css',
          script1:'homepage_login.js',
          script2:'https://code.jquery.com/jquery-3.6.0.js',
          users:req.user
      });
    })
     app.get('/', (req, res) => {
      res.render('home',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css',
          script1:'homepage.js',
          script2:'https://code.jquery.com/jquery-3.6.0.js'
      });
    })

    app.use('/home',homerouter)
    app.use('/detail',detailrouter)
    app.use('/login',loginrouter)
    app.use('/signup',signuprouter)
    app.use('/Ai',Airouter)
    app.use('/App',Approuter)
    app.use('/costume',costumerouter)
    app.use('/ecommerce',ecommercerouter)
    app.use('/Game',Gamerouter)
    app.use('/donate',donaterouter)
    app.use('/create',createrouter)
    app.use('/store',storerouter)
    app.use('/me',merouter)
    app.use('/datauser',datauserrouter)
    app.post('/signup',async(req,res)=>{
       try{
           const tk=new User({
               email:req.body.email,
               password:req.body.password,
               name_author:req.body.name,
               img_author:req.body.img_author,
           })
         tk.save()
            .then(()=> res.redirect('http://localhost:3000/login'))
            .catch(error => {

            })  
       }catch(error){
         res.status(404).send(error);
       }
    })
}

module.exports = route;