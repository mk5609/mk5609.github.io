/*
const addPrint = ( n , callback ) => {
    setTimeout( ()=>{
        const value = n+1;
        console.log( value );
        if( callback ) {
            callback(value);
        }
    } , 1000 );
}

addPrint( 0, n =>{
    addPrint( n , n => {
        addPrint( n , n => {
            addPrint( n , n => {
                addPrint( n , n => {
                    addPrint( n , n=> {
                        console.log( '작업 끝!');
                    });
                } );
            });
        } );
    } );
} );
*/

const addPrint = (n) => {
    return new Promise( (resolve,reject) => {
        setTimeout( ()=>{
            const value = n+1;
            if( value === 5 ) {
                const error = new Error();
                error.name = 'value is five error';
                reject(error);
                return;
            }
            console.log( value );
            resolve(value);
        } , 1000 );
    });
}
addPrint(0).then(addPrint)
.then(addPrint)
.then(addPrint)
.then(addPrint)
.catch( e => {
    console.log( e );
});

// addPrint(0).then( n => {
//     return addPrint(n);
// }).then( n => {
//     return addPrint(n);
// }).then( n => {
//     return addPrint(n);
// }).then( n => {
//     return addPrint(n);
// }).then( n => {
//     return addPrint(n);
// });

