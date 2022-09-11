//Import da biblioteca do express
const express = require('express');

//Import da biblioteca do cors
const cors = require('cors');

//Import da biblioteca do body-parser
const bodyParser = require('body-parser');
const {getInfos} = require('./modulos/livros.js')

const app = express();

app.use((request,response,next) => {
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());

    next();
})

app.get('/livros/:keyword', cors(), async function(request, response, next){
    let key = request.params.keyword;
    let infos = getInfos(key);

    if(infos){
        response.status(200);
        response.json(infos)
    }else
        response.status(404)
})


app.listen(8080, function(){
    console.log('Servidor aguardando requisicoes')
});

