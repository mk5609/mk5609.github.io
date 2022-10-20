// const ACCESS_KEY = 'kWuw6vg9fc9Hehd5aeURFw-qECbF9kvWI91pLfqrzMY';
// const URL = `https://api.unsplash.com/photos/random?query=landscape&client_id=${ACCESS_KEY}`;
// const URL = `https://kyung0446.github.io/json/image_unsplash.json`;
const URL = `../image_unsplash.json`;
// console.log( URL );

const changeBgDesc = (desc,user,country) => {
    const tagP = document.querySelector('.bg_desc');
    const text = `${desc} , ${user} , ${country} `;
    tagP.textContent = text;
}

const changeBgImage = (image_url) => {
    const bodyElem = document.body;
    bodyElem.style.backgroundImage = `linear-gradient( rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${image_url})`;  
}

const getRandomIdx = (data) => {
    const idx = Math.floor( Math.random() * data.length );
    changeBgImage( data[idx].urls.full );
    changeBgDesc( data[idx].alt_description , data[idx].location.name, data[idx].location.country);
}
const bg_init = () => {
    fetch(URL).then( (response) => {
        return response.json();
    }).then( (data) => {
        console.log( data );
        getRandomIdx( data );
    }).catch( (error)=>{
        console.log( error );
    });
}
bg_init();
