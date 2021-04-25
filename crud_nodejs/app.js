const { json } = require('express');
const express= require('express');
const app = express();

//app.get('/',(req, res)=>{
//res.send('hola');
//});

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}));
app.use(express(json)); 
app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('server runnig in http://localhost:5000');
});
