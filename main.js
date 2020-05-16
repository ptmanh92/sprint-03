const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`App listening on > ${app.get('port')}`);
})