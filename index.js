let nPlayers=0
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function startGame(){
    document.getElementById("btn1").addEventListener("click",renderPlayers)
    document.getElementById("restart").innerHTML = renderRestartButton()
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
    document.getElementById("btn1").removeEventListener("click",renderPlayers)
    renderFlop()
    renderTurn()
    renderRiver()
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
    </div>
</div>`
}
function renderRestartButton(){
    return "RESTART"
}
function renderFlop(){
    deal.innerHTML += `<div class="dealer-card" id="dc1">
    <h1>?</h1>
</div>
<div class="dealer-card" id="dc2">
    <h1>?</h1>
</div>
<div class="dealer-card" id="dc3">
    <h1>?</h1>
</div>`
}
function renderTurn(){
    deal.innerHTML += `<div class="dealer-card" id="dc4">
    <h1>?</h1>
</div>`
}
function renderRiver(){
    deal.innerHTML += `<div class="dealer-card" id="dc5">
    <h1>?</h1>
</div>`

}
function restoreGame(){
    row1.innerHTML = ""
    row2.innerHTML = ""
    deal.innerHTML = ""
    document.getElementById("btn1").addEventListener("click",renderPlayers)
}

let row1 = document.getElementById("r1")
let row2 = document.getElementById("r2")
let deal = document.getElementById("bottom-row")
startGame()