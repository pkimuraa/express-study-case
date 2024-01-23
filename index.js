const express = require('express');

const app = express();


app.use(express.json());
/* app.use(express.urlencoded({ extended: false}));
 */
app.use('/', (req, res, next) => {
    next();
});

app.post('/add-product',(req, res, next) => {
    console.log(req.body)
    res.send('<h1> response </h1>')
})

app.get('/', (req, res, next) => {
    res.send('<h1> path: / </h1>')
});

app.listen(3000, () => console.log('running at 3000'));