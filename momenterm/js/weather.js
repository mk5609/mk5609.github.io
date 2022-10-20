
const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = 'cdae6f6e0f0ea44b1e4c7cf708a01ffb';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    // console.log( URL );

    fetch(URL).then( (response) => {
        return response.json();
    }).then( (data) => {
        console.log( data );
        console.log( data.name );
        console.log( data.weather[0].main);
        console.log( data.clouds.all );
        console.log( data.main.temp - 273.15 );
        const tagImg = document.querySelector('.icon');
        tagImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}

const error = () => {
    alert( '당신의 위치 정보를 알수 없습니다');
}

navigator.geolocation.getCurrentPosition( success , error );