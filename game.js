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



showScreen("village-screen");


document.getElementById("welcome").innerHTML=

`${village}의 첫 이장<br>${name}님 환영합니다.`;



localStorage.setItem(
"solarVillageSave",
JSON.stringify(gameData)
);

}
