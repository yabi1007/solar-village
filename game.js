const gameData = {
    player:{
        name:"",
        gender:null
    },

    village:{
        name:"",
        population:50,
        money:1000,
        energy:0
    }
};


function showScreen(screenId){

    document.querySelectorAll(".screen")
    .forEach(screen=>{
        screen.style.display="none";
    });

    document.getElementById(screenId).style.display="block";
}


function createVillage(){

    const playerName =
    document.getElementById("player-name").value;

    const villageName =
    document.getElementById("village-name").value;


    if(!playerName || !villageName){
        alert("이장 이름과 마을 이름을 입력해주세요.");
        return;
    }


    gameData.player.name = playerName;
    gameData.village.name = villageName;


    showScreen("village-screen");


    document.getElementById("welcome").innerHTML =
    `${villageName}의 첫 이장 ${playerName}님<br>
    마을의 새로운 시작입니다.`;
}
