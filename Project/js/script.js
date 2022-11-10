const handlerTool = () => {
  const tagTool = document.querySelectorAll(".tool > p");
  const tagToolDesc = document.querySelector(".tool-desc > p");

  tagTool[0].addEventListener("click", function() {
    tagTool[0].style.backgroundColor = "aqua";
    tagTool[1].style.backgroundColor = "#6f27f2";
    tagTool[2].style.backgroundColor = "#6f27f2";
    
    tagToolDesc.textContent = "웹 표준, 접근성을 준수하며 반응형 레이아웃 제작이 가능합니다."
  })

  tagTool[1].addEventListener("click", function() {
    tagTool[0].style.backgroundColor = "#6f27f2";
    tagTool[1].style.backgroundColor = "aqua";
    tagTool[2].style.backgroundColor = "#6f27f2";
    
    tagToolDesc.textContent = "기본적인 문법 사용과 플러그인 사용이 가능합니다."
  })

  tagTool[2].addEventListener("click", function() {
    tagTool[0].style.backgroundColor = "#6f27f2";
    tagTool[1].style.backgroundColor = "#6f27f2";
    tagTool[2].style.backgroundColor = "aqua";
    
    tagToolDesc.textContent = "누끼 따는 작업과 간단한 웹 디자인을 할 수 있습니다."
  })
}

const init = () => {
  handlerTool();
}

init();