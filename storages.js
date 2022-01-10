var localScore=document.querySelector(".localcount");
var sessionScore=document.querySelector(".sessioncount");
var localincrement=document.querySelector(".inc");

localincrement.addEventListener('click',function(){
    let lscore=Number(localScore.textContent)+1;
    localScore.textContent=lscore;
    localStorage.setItem("localScore",lscore);

    let sscore=Number(sessionScore.textContent)+1;
    sessionScore.textContent=sscore;
    sessionStorage.setItem("sessionScore",sscore);

});

if(localStorage.getItem('localScore') != null){
    localScore.textContent = localStorage.getItem('localScore');
}
if(sessionStorage.getItem('sessionScore') != null){
    sessionScore.textContent = sessionStorage.getItem('sessionScore');
}

