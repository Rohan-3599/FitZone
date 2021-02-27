import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Blog from './models/blog.js'
import path from 'path'
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cors());
app.get('/api/customers', (req , res) =>{
  const customers = [{id: 1 , quote :'Tips for healthy & fit body' , image : '/src/components/img/blog-4.jpg', message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.' },
  {id: 2 , quote:'Train hard for a better life' , image : '/src/components/img/blog-5.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.' },
  {id: 3 , quote:'20 Min Workout', image : '/src/components/img/blog-4.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 4 , quote:'20 Min Workout' , image : '/src/components/img/blog-6.jpg', message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 5 , quote:'FitZone Secrets' , image : '/src/components/img/blog-6.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 6 , quote:'20 Min Abs Workout' , image : '/src/components/img/blog-5.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 7 , quote:'20 Min Abs Workout' , image : '/src/components/img/blog-5.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 8 , quote:'20 Min Abs Workout' , image : '/src/components/img/blog-5.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 9 , quote:'20 Min Workout', image : '/src/components/img/blog-4.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 10 , quote:'20 Min Workout' , image : '/src/components/img/blog-6.jpg', message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 11 , quote:'FitZone Secrets' , image : '/src/components/img/blog-6.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
  {id: 12 , quote:'20 Min Abs Workout' , image : '/src/components/img/blog-5.jpg' , message: 'In viverra urna in orci imperdiet, aliquam suscipit risus consequat. Sed auctor, urna a  convallis laoreet, diam nibh dignissim ante, ac finibus.'},
];
res.json(customers);
})
const PORT = process.env.PORT ;
mongoose.connect(process.env.url, { useNewUrlParser : true , useUnifiedTopology : true})
.then(() => app.listen(PORT , () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message)) ;


app.post('/api/submit', function(req,res,next)  {
 var item = {
   name : req.body.name,
   phone : req.body.phone,
   email : req.body.email
 }
 Blog.create( item , function(err , blog){
  if (err){
    console.log(err);
  }else{
    console.log(Blog);
  }
})
 


})