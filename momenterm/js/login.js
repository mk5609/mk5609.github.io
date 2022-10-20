const LOGIN_KEY = 'username';
const tagP = document.querySelector('.loginName');
const tagLoginForm = document.querySelector('#loginForm');
const tagInput = tagLoginForm.querySelector('input');

const viewUserName = (username) => {
    //p태그에 보여주기
    tagP.classList.remove('hidden');
    tagP.textContent = `Hello ${username}`;
    //form은 보이지 않게
    tagLoginForm.classList.add('hidden');
}

const handlerSubmit = (event) => {
    event.preventDefault();
    const username = tagInput.value;
    viewUserName(username);
    //localstorage에 저장
    window.localStorage.setItem(LOGIN_KEY,username);
}
const init = () => {
    //1. 로컬스토리지에 KEY가 있는지 확인
    const username = window.localStorage.getItem(LOGIN_KEY);
    if( username ) {
        //값이 있을 때
        viewUserName(username);
    } else {
        //값이 없을 때
        tagLoginForm.addEventListener('submit', handlerSubmit );
    }    
}
window.addEventListener('load',init);