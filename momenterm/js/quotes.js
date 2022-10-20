const quotes = [
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다. ",
        author : "파울로 코엘료",
    },
    {
        quote : "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author : "헬렌켈러",
    },
    {
        quote : "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author : "이드리스 샤흐",
    },
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author : "랄프 왈도 에머슨",
    },
    {
        quote : "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
        author : "L론허바드",
    },
];

const tagChangeBtn = document.querySelector('.quote>button');
const tagQuote = document.querySelector('.quote>span:nth-child(2)');
const tagAuthor = document.querySelector('.quote>span:nth-child(3)');
const handlerChangeQuote = ()=>{
    const random = Math.floor(Math.random()*quotes.length);
    tagQuote.textContent = quotes[random].quote;
    tagAuthor.textContent = quotes[random].author;
}
const quotes_init = () => {
    handlerChangeQuote();
    tagChangeBtn.addEventListener('click',handlerChangeQuote);
}
quotes_init();