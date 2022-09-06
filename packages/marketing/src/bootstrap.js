import React from 'react';

const mount = ( el ) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    );
}

if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    
    if(devRoot){
        mount(_marketing-dev-root);
    }
}

export { mount };
