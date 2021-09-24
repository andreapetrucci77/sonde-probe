const express = require( "express" );
const app = express();

app.get( "/" , (req, res) => {
   const html =  ` <h1> Hello World dalla nostra app OpenShift NodeJS </h1> 
  <p> My Pod Name : ${process.env.MY_POD_NAME} </p> 
  <p> Nome della mia applicazione : ${process.env.MY_APPLICATION_NAME} </p>`;

  res.status( 200 ).send(html);
});

app.get( "/health" , (req, res) => {
   const html =  "<h1>L'applicazione è integra</h1>" ;

  res.status( 200 ).send(html);
});

app.get( "/unhealthy" , (req, res) => {
   const html =  "<h1>L'applicazione non è salutare</h1>" ;
  res.status( 404 ).send(html);
});

app.listen( 8000 , () => {
  console.log( "L'applicazione sta ascoltando le richieste sulla porta 8000" );
});