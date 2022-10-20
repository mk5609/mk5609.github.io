const setCurrentScene = () => {
    yOffset = window.pageYOffset;
    let total = 0;
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        total += sceneInfo[i].scrollHeight;
        if( total >= yOffset ){
            currentScene = i;
            break;
        }
    }
}
const setSecHeight = () => {
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
        sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px';
    }
    setCurrentScene();
}
const partAniPlay = (values,currentYOffset) => {
    let calc=0;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    if( values.length >= 3 ){
        const start = values[2].start * scrollHeight;
        const end = values[2].end * scrollHeight;
        const partHeight = end - start;
        const partRatio =  (currentYOffset-start) / partHeight;
        if( currentYOffset >= start && currentYOffset <= end) {
            calc = partRatio*(values[1]-values[0])+values[0];
        } else if( currentYOffset < start ) {
            calc = values[0];
        } else if( currentYOffset > end ) {
            calc = values[1];
        }
    } else {
        calc = scrollRatio*(values[1]-values[0])+values[0];
    }    
    return calc;
}
const sectionAniPlay = (prevHeight) => {
    const currentYOffset = yOffset - prevHeight;
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;
    //
    const tagObjs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    switch( currentScene ) {
        case 0 :  //section-0 
            //canvas load
            let seq = Math.round(partAniPlay(values.images_seq, currentYOffset));
            if( seq < 0 ) seq = 0;
            tagObjs.context.drawImage(tagObjs.videoImages[seq],0,0);
            tagObjs.canvas.style.opacity = partAniPlay(values.canvas_opacity_out, currentYOffset);
            //messageA
            if( scrollRatio <= 0.22 ) {
                tagObjs.msgA.style.opacity = partAniPlay( values.msgA_opacity_in , currentYOffset );
                tagObjs.msgA.style.transform = `translateY(${partAniPlay( values.msgA_position_in , currentYOffset )}px)`;
            } else {
                tagObjs.msgA.style.opacity = partAniPlay( values.msgA_opacity_out , currentYOffset );
                tagObjs.msgA.style.transform = `translateY(${partAniPlay( values.msgA_position_out , currentYOffset )}px)`;
            }   
            //messageB
            if( scrollRatio <= 0.32 ) {
                tagObjs.msgB.style.opacity = partAniPlay( values.msgB_opacity_in , currentYOffset );
                tagObjs.msgB.style.transform = `translateY(${partAniPlay( values.msgB_position_in , currentYOffset )}px)`;
            } else {
                tagObjs.msgB.style.opacity = partAniPlay( values.msgB_opacity_out , currentYOffset );
                tagObjs.msgB.style.transform = `translateY(${partAniPlay( values.msgB_position_out , currentYOffset )}px)`;
            } 
            //messageC
            if( scrollRatio <= 0.42 ) {
                tagObjs.msgC.style.opacity = partAniPlay( values.msgC_opacity_in , currentYOffset );
                tagObjs.msgC.style.transform = `translateY(${partAniPlay( values.msgC_position_in , currentYOffset )}px)`;
            } else {
                tagObjs.msgC.style.opacity = partAniPlay( values.msgC_opacity_out , currentYOffset );
                tagObjs.msgC.style.transform = `translateY(${partAniPlay( values.msgC_position_out , currentYOffset )}px)`;
            } 
            //messageD
            if( scrollRatio <= 0.52 ) {
                tagObjs.msgD.style.opacity = partAniPlay( values.msgD_opacity_in , currentYOffset );
                tagObjs.msgD.style.transform = `translateY(${partAniPlay( values.msgD_position_in , currentYOffset )}px)`;
            } else {
                tagObjs.msgD.style.opacity = partAniPlay( values.msgD_opacity_out , currentYOffset );
                tagObjs.msgD.style.transform = `translateY(${partAniPlay( values.msgD_position_out , currentYOffset )}px)`;
            } 
            break;
        case 1 :  //section-1
            break;
        case 2 :  //section-1
            break;
        case 3 :  //section-1

            break;
    }
}
const handlerScroll = () => {
    yOffset = window.pageYOffset;
    //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함.
    let prevHeight = 0;
    for( let i=0 ; i<currentScene ; i++ ){
        prevHeight += sceneInfo[i].scrollHeight;
    }
    if( yOffset > prevHeight + sceneInfo[currentScene].scrollHeight ){
        currentScene++;
    }
    if( yOffset < prevHeight ) {
        currentScene--;
    }
    document.body.setAttribute('id',`show-section-${currentScene}`);
    sectionAniPlay(prevHeight);
}

const setCanvasImages = () => {
    let imgElem;
    let heightRatio;
    for( let j=0 ; j<sceneInfo.length ; j++ ) {
        //이미지 객제 삽입
        let count = sceneInfo[j].imgCount;
        if( count <= 0 ) continue;
        for( let i=0 ; i<count ; i++ ) {
            imgElem = new Image();
            imgElem.src = `./images/seq_${j}/${i}.jpg`;
            sceneInfo[j].objs.videoImages.push(imgElem);
        }
        heightRatio = window.innerHeight / sceneInfo[j].objs.canvas.height;
        if( j === 0 ) {
            sceneInfo[j].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
        }
        else {
            sceneInfo[j].objs.canvas.style.transform = `scale(${heightRatio})`;
        }
        
        sceneInfo[j].objs.videoImages[0].onload = () => {
            sceneInfo[j].objs.context.drawImage(sceneInfo[j].objs.videoImages[0],0,0);
        } 
    }
}
const menuCheck = () => {
    if( yOffset > 45 ) {
        document.querySelector('.local-nav').classList.add('local-nav-fixed');
    }else {
        document.querySelector('.local-nav').classList.remove('local-nav-fixed');
    }
}
const init = () => {
    //각각의 섹션의 height 설정
    setSecHeight();
    //캔버스 이미지 로드
    setCanvasImages();
  
    //초기화
    window.addEventListener('scroll',()=>{
        handlerScroll();
        menuCheck();
    });

}
window.addEventListener('load',init);
window.addEventListener('resize',setSecHeight);
