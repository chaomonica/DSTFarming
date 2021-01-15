const express = require('express')

const app = express();
const port = 3002;

app.use(express.static('./dist'))

app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
})

