
const axios = require( 'axios' );

module.exports = {
    loginUser: ( userName, userPass ) => {
        console.log( 'username: ' + userName );
        console.log( 'userpass: ' + userPass );
    },

    createUser: ( name, userName, userEmail, userPass ) => {
        if ( !name || !userName || !userEmail || !userPass ) {
            console.log( 'Empty Field' );
        } else {
            console.log( 'Creating user' );
            let newUser = {
                name: name,
                userName: userName,
                userEmail: userEmail,
                userPass: userPass
            }
            axios.post( 'http://localhost:3030/api/createUser/', newUser ).then(( response ) => { console.log( response.data ) } ).catch( err => console.log( 'Could not create user' ) );
        }
    }
}