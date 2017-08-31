const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const massive = require( 'massive' );
const config = require( '../config' );
const app = express();
// const seed_file = require( '../DB/init/seed_file.sql' );

app.use( bodyParser.json() );
app.use( cors() );

massive( config.connectionString ).then( DB => {
    app.set( 'DB', DB );
    app.get( 'DB' ).init.seed_file();
} ).catch( err => { console.log( 'Connection Issue: ' + err ) } )

app.get( '/api/getUserInfo/:username', ( request, response ) => {
    request.app.get( 'DB' ).getAllFromUser( request.params.username ).then( data => {
        response.status( 200 ).send( data )
    } )
} )

app.post( '/api/createUser/', ( request, response ) => {
    let { name, userName, userEmail, userPass } = request.body;
    request.app.get( 'DB' ).createUser( name, userName, userEmail, userPass ).then( data => {
        response.status( 200 ).send( 'User has been created' );
    } )
} )

const port = 3030;
app.listen( port, () => console.log( 'Reporting for duty on port ', port ) );