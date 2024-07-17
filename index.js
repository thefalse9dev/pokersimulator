let nPlayers=0
let isFlop = 0
let isTurn = 0
let isRiver = 0
let isPlayers = 0
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function startGame(){
    document.getElementById("btn1").addEventListener("click",renderPlayers)
    document.getElementById("restart").innerHTML = renderButton("RESTART")
    
    document.getElementById("restart").addEventListener("click",restoreGame)
    
}


function renderPlayers(){
    nPlayers = document.getElementById("number-inp").value
    console.log(`we need to render ${nPlayers} players`)
    for (let i=1;i<=Math.min(4,nPlayers);i++){
        row1.innerHTML += renderPlayer(i)
    }
    if (nPlayers>4){
        for (let i=5;i<=nPlayers;i++)
            row2.innerHTML += renderPlayer(i)
    }
    isPlayers=1
    document.getElementById("btn1").removeEventListener("click",renderPlayers)
    
    document.getElementById("showFlop").innerHTML = renderButton("FLOP")
    document.getElementById("showFlop").addEventListener("click",renderFlop)

    document.getElementById("showTurn").innerHTML = renderButton("TURN")
    document.getElementById("showTurn").addEventListener("click",renderTurn)

    document.getElementById("showRiver").innerHTML = renderButton("RIVER")
    document.getElementById("showRiver").addEventListener("click",renderRiver)
        
    
    
    
}
function renderPlayer(n){
    return `<div class="player" id="player${n}">
    <div class="player-cards" id="p${n}-c${n}">
        <h1>?</h1>
    </div>
    <div class="player-cards" id="p${n}-c${n}">
        <h1>?</h1>
    </div>
    <div class="player-data">
        <p>player ${n}</p>
        <button>FLIP</button>
    </div>
</div>`
}
function renderButton(text){
    return text
}
function renderFlop(){
    if (isFlop===0 && isPlayers==1){
        isFlop=1
        deal.innerHTML += `<div class="dealer-card" id="dc1">
    <h1>?</h1>
</div>
<div class="dealer-card" id="dc2">
    <h1>?</h1>
</div>
<div class="dealer-card" id="dc3">
    <h1>?</h1>
</div>`}
    
}
function renderTurn(){
    if (isTurn===0 && isPlayers==1){
        isTurn=1
    deal.innerHTML += `<div class="dealer-card" id="dc4">
    <h1>?</h1>
</div>`}
}
function renderRiver(){
    
    if (isRiver===0 && isPlayers==1){
        isRiver=1
    deal.innerHTML += `<div class="dealer-card" id="dc5">
    <h1>?</h1>
</div>`}

}
function restoreGame(){
    row1.innerHTML = ""
    row2.innerHTML = ""
    deal.innerHTML = ""
    isFlop=0
    isTurn=0
    isRiver=0
    isPlayers=0
    document.getElementById("btn1").addEventListener("click",renderPlayers)
}

let row1 = document.getElementById("r1")
let row2 = document.getElementById("r2")
let deal = document.getElementById("bottom-row")
startGame()