const express = require('express');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');


const PORT = 3000;
const PORTTWO = 3001;
const app = express();
var app_two= express();

const csrfMiddleware = csurf({cookie: true});

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cookieParser());
app.use(csrfMiddleware);


app.get('/', (req, res) =>{
    res.send(`
        <h1> Hello world </h1>
        <form action ="/entry" method="POST" action = "http://localhost:3000"/>
        <div>
            <label for = "message"> Enter a message </label>
            <input id = "message" name="message" type="text" />
        </div>
        <input type="submit" value="Submit">
        <input type="hidden" name="_csrf" value="${req.csrfToken()}">
        </form>
    `);
});


app.post('/entry', (req, res) => {
    console.log(`3000 Message received: ${req.body.message}`);
    res.send(`3000 Message received: ${req.body.message}`);
});

app.listen(PORT, () =>{
    console.log(`listening 3000 on http://localhost:${PORT}`);
});


app_two.get('/', (req, res) =>{
    res.send(`
        <h1> Hello world </h1>
        <form method="POST" action = "http://localhost:3000/entry"/>
        <div>
            <label for = "message"> Enter a message </label>
            <input id = "message" name="message" type="text" />
        </div>
        <input type="submit" value="Submit">
        </form>
    `);
});

app_two.listen(PORTTWO, () =>{
    // console.log(`listening 3001 on http://localhost:${PORTTWO}`);
});
