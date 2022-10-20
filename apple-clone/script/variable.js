//전역변수
let yOffset = 0;  //window.pageYOffset 정보
let currentScene = 0;  //현재 활성화 된 section
const sceneInfo = [
    {//section-0
        heightCnt : 5,   //window.innerHeight 의 몇배로 height설정
        scrollHeight : 0,  
        imgCount : 117,
        objs : {
            container : document.querySelector('#scroll-section-0'),
            msgA : document.querySelector('#scroll-section-0 > .a'),
            msgB : document.querySelector('#scroll-section-0 > .b'),
            msgC : document.querySelector('#scroll-section-0 > .c'),
            msgD : document.querySelector('#scroll-section-0 > .d'),
            canvas : document.querySelector('#canvas-0'),
            context : document.querySelector('#canvas-0').getContext('2d'),
            videoImages : [],
        },
        values : {
            images_seq : [0,116],
            canvas_opacity_out : [1,0,{start:0.9, end:1}],
            msgA_opacity_in : [0,1,{start:0.2, end:0.25}],
            msgA_position_in : [30,0,{start:0.2, end:0.25}],
            msgA_opacity_out : [1,0,{start:0.25, end:0.3}],
            msgA_position_out : [0,-30,{start:0.25, end:0.3}],
            msgB_opacity_in : [0,1,{start:0.3, end:0.35}],
            msgB_position_in : [30,0,{start:0.3, end:0.35}],
            msgB_opacity_out : [1,0,{start:0.35, end:0.4}],
            msgB_position_out : [0,-30,{start:0.35, end:0.4}],
            msgC_opacity_in : [0,1,{start:0.4, end:0.45}],
            msgC_position_in : [30,0,{start:0.4, end:0.45}],
            msgC_opacity_out : [1,0,{start:0.45, end:0.5}],
            msgC_position_out : [0,-30,{start:0.45, end:0.5}],
            msgD_opacity_in : [0,1,{start:0.5, end:0.55}],
            msgD_position_in : [30,0,{start:0.5, end:0.55}],
            msgD_opacity_out : [1,0,{start:0.55, end:0.6}],
            msgD_position_out : [0,-30,{start:0.55, end:0.5}],
        },
    },
    {//section-1
        heightCnt : 2,
        scrollHeight : 0,
        imgCount : 0 ,
        objs : {
            container : document.querySelector('#scroll-section-1'),
        }  
    },
    {//section-2
        heightCnt : 4,
        scrollHeight : 0,
        imgCount : 117 , 
        objs : {
            container : document.querySelector('#scroll-section-2'),
            canvas : document.querySelector('#canvas-2'),
            context : document.querySelector('#canvas-2').getContext('2d'),
            videoImages : [],
        }  
    },
    {//section-3
        heightCnt : 5,
        scrollHeight : 0,
        imgCount : 2,
        objs : {
            container : document.querySelector('#scroll-section-3'),
            canvas : document.querySelector('#canvas-3'),
            context : document.querySelector('#canvas-3').getContext('2d'),
            videoImages : [],
        },
        values :{}, 
    },
];