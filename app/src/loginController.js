module.exports = {
    loginUser: ( userName, userPass ) => {
        console.log( 'username: ' + userName );
        console.log( 'userpass: ' + userPass );
    },

    createUser: ( name, userName, userEmail, userPass ) => {
        if ( !name ) {
            console.log( 'Empty Name' );
        } else {
            console.log( 'name: ' + name );
        }
        if ( !userName ) {
            console.log( 'Empty UserName' );
        } else {
            console.log( 'username: ' + userName );
        }
        if ( !userEmail ) {
            console.log( 'Empty Email' );
        } else {
            console.log( 'user email: ' + userEmail );
        }
        if ( !userPass ) {
            console.log( 'Empty Password' );
        } else {
            console.log( 'userpass: ' + userPass );
        }
    }
}