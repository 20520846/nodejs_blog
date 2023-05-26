const newRouter = require('./news');
const sideRouter = require('./site');   

function route(app){
         
    app.use('/news', newRouter);
    app.use('/', sideRouter);

}

module.exports = route;