const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnect = require('./dbConnect');

app.use(express.json());
const userRoute = require('./routes/userRoute');

const path=require('path')

app.use('/api/user/', userRoute);


    app.use("/", express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })


// if(process.env.NODE_ENV==='production'){
//     app.use("/", express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
//     })
// }

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on port ${port}!`));

