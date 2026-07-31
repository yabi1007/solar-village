const gameData = {

player:{
    name:"",
    gender:null
},

village:{
    name:""
}

};



function showScreen(id){

document.querySelectorAll(".screen")
.forEach(screen=>{
    screen.style.display="none";
});


document.getElementById(id).style.display="block";

}



function selectGender(gender){

gameData.player.gender = gender;


document.querySelectorAll(".gender")
.forEach(el=>{
    el.classList.remove("selected");
});


document.getElementById(gender)
.classList.add("selected");

}



function createVillage(){

const name =
document.getElementById("player-name").value;


const village =
document.getElementById("village-name").value;


if(!gameData.player.gender){

alert("성별을 선택해주세요.");
return;

}


if(!name || !village){

alert("이장 이름과 마을 이름을 입력해주세요.");
return;

}


gameData.player.name=name;
gameData.village.name=village;



showScreen("prologue-screen");
startPrologue();


document.getElementById("welcome").innerHTML=

`${village}의 첫 이장<br>${name}님 환영합니다.`;



localStorage.setItem(
"solarVillageSave",
JSON.stringify(gameData)
);

}


let prologueIndex = 0;
let typingTimer = null;
let isTyping = false;
let fullText = "";

function startPrologue(){
    prologueIndex = 0;
    showPrologue();
}

function showPrologue(){

    const scene = prologueData[prologueIndex];

    document.getElementById("prologue-image").src = scene.image;

    let text = scene.text
        .replaceAll("[마을이름]", gameData.village.name)
        .replaceAll("[이장이름]", gameData.player.name);

    typeText(text);
}


function typeText(text){

    clearInterval(typingTimer);

    fullText = text;
    let index = 0;

    const box = document.getElementById("dialogue");

    box.innerText = "";
    isTyping = true;

    typingTimer = setInterval(()=>{

        box.textContent += fullText[index];
        index++;

        if(index >= fullText.length){
            clearInterval(typingTimer);
            isTyping = false;
        }

    },50);
}


document.addEventListener("DOMContentLoaded",()=>{

const next = document.getElementById("next-button");

if(next){

next.onclick=function(){

    if(isTyping){

        clearInterval(typingTimer);
        document.getElementById("dialogue").textContent = fullText;
        isTyping=false;
        return;

    }

    prologueIndex++;

    if(prologueIndex < prologueData.length){
        showPrologue();
    }else{
        showScreen("village-screen");
    }

};

}

});
