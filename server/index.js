const express = require('express')

const app = express();
const port = 3002;

app.use(express.static('./dist'))

//this is to help react router get to page without navigating through links from main page
//https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed
app.get('*', function (request, response){
  response.sendFile('index.html', { root: './dist'})
})

app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
})

