let nPlayers=0
let isFlop = 0
let isTurn = 0
let isRiver = 0
let isPlayers = 0
let suits = ['♠︎','♥︎','♣︎','♦︎']
let nums = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
let deck = []
for(let i=0;i<nums.length;i++){
    for(let j=0;j<suits.length;j++)
        deck.push(suits[j]+nums[i])
}
document.getElementById("bb-id").innerHTML=""
//console.log(deck)

function drawCard(){
    n=deck.length
    random = Math.floor(Math.random()*n)
    toRet = deck[random]
    //console.log(deck)
    deck.splice(random,1)
    //console.log(deck)
    return toRet
}
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

playerCards = [[]]
function populatePlayerCards(n){
    for (let i=1;i<=n;i++){
        playerCards.push([drawCard(),drawCard()])
    }
}

function startGame(){
    document.getElementById("btn1").addEventListener("click",renderPlayers)
    document.getElementById("bb-id").innerHTML=`<button id="restart" onclick = "restoreGame()"class="read-number-inp"></button>`
    document.getElementById("restart").innerHTML = renderButton("RESTART")
    deck = []
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<suits.length;j++)
            deck.push(suits[j]+nums[i])
    }
    //document.getElementById("restart").addEventListener("click",restoreGame)
    
}


function renderPlayers(){
    nPlayers = document.getElementById("number-inp").value
    //console.log(`we need to render ${nPlayers} players`)
    populatePlayerCards(nPlayers)
    //console.log(playerCards[0])
    for (let i=1;i<=Math.min(4,nPlayers);i++){
        row1.innerHTML += renderPlayer(i)
    }
    if (nPlayers>4){
        for (let i=5;i<=nPlayers;i++)
            row2.innerHTML += renderPlayer(i)
    }
    isPlayers=1
    document.getElementById("btn1").removeEventListener("click",renderPlayers)
    document.getElementById("bb-id").innerHTML = `<button id="restart" onclick = "restoreGame()" class="read-number-inp">RESTART</button>
    <button id="showFlop" onclick = "renderFlop()" class="read-number-inp">FLOP</button>
    <button id="showTurn" onclick = "renderTurn()" class="read-number-inp">TURN</button>
    <button id="showRiver" onclick = "renderRiver()" class="read-number-inp">RIVER</button>`
    /*document.getElementById("showFlop").innerHTML = renderButton("FLOP")
    document.getElementById("showFlop").addEventListener("click",renderFlop)

    document.getElementById("showTurn").innerHTML = renderButton("TURN")
    document.getElementById("showTurn").addEventListener("click",renderTurn)

    document.getElementById("showRiver").innerHTML = renderButton("RIVER")
    document.getElementById("showRiver").addEventListener("click",renderRiver) */
}

function renderPlayer(n){
    return `<div class="player" id="player${n}" >
    <div class="player-cards" id="p${n}-c1" onclick="pl(${n})">
        <h1>?</h1>
    </div>
    <div class="player-cards" id="p${n}-c2" onclick="pl(${n})">
        <h1>?</h1>
    </div>
    <div class="player-data">
        player ${n}
    </div>
</div>`
}

function pl(n){
    let Color1 = "Red"
    let Color2 = "Red"
    if (playerCards[n][0][0].charCodeAt(0)===suits[0].charCodeAt(0) || playerCards[n][0][0].charCodeAt(0)===suits[2].charCodeAt(0)) Color1="Black"
    if (playerCards[n][1][0].charCodeAt(0)===suits[0].charCodeAt(0) || playerCards[n][1][0].charCodeAt(0)===suits[2].charCodeAt(0)) Color2="Black"
    if(document.getElementById(`p${n}-c1`).innerHTML===`<h1 id="${Color1}">${playerCards[n][0]}</h1>`){
        document.getElementById(`p${n}-c1`).innerHTML =`<h1>?</h1>`
        document.getElementById(`p${n}-c2`).innerHTML =`<h1>?</h1>`
    }
    else
    {    document.getElementById(`p${n}-c1`).innerHTML =`<h1 id="${Color1}">${playerCards[n][0]}</h1>`
        document.getElementById(`p${n}-c2`).innerHTML =`<h1 id="${Color2}">${playerCards[n][1]}</h1>`}
    
}

function renderButton(text){
    return text
}
function renderFlop(){
    console.log(deck)
    let fc1 = drawCard()
    let fc2 = drawCard()
    let fc3 = drawCard()
    let Color1 = "Red"
    let Color2 = "Red"
    let Color3 = "Red"
    if (fc1[0].charCodeAt(0)===suits[0].charCodeAt(0) || fc1[0].charCodeAt(0)===suits[2].charCodeAt(0)) Color1="Black"
    if (fc2[0].charCodeAt(0)===suits[0].charCodeAt(0) || fc2[0].charCodeAt(0)===suits[2].charCodeAt(0)) Color2="Black"
    if (fc3[0].charCodeAt(0)===suits[0].charCodeAt(0) || fc3[0].charCodeAt(0)===suits[2].charCodeAt(0)) Color3="Black"

    if (isFlop===0 && isPlayers==1){
        isFlop=1
        deal.innerHTML += `<div class="dealer-card" id="dc1">
    <h1 id="${Color1}">${fc1}</h1>
</div>
<div class="dealer-card" id="dc2">
    <h1 id="${Color2}">${fc2}</h1>
</div>
<div class="dealer-card" id="dc3">
    <h1 id="${Color3}">${fc3}</h1>
</div>`}
    
}
function renderTurn(){
    let tc = drawCard()
    let color = "Red"
    if (tc[0].charCodeAt(0)===suits[0].charCodeAt(0) || tc[0].charCodeAt(0)===suits[2].charCodeAt(0)) color="Black"
    if (isTurn===0 && isPlayers==1 && isFlop==1){
        isTurn=1
    deal.innerHTML += `<div class="dealer-card" id="dc4">
    <h1 id="${color}">${tc}</h1>
</div>`}
}
function renderRiver(){
    let rc = drawCard()
    let color = "Red"
    if (rc[0].charCodeAt(0)===suits[0].charCodeAt(0) || rc[0].charCodeAt(0)===suits[2].charCodeAt(0)) color="Black"
    if (isRiver===0 && isPlayers==1 && isTurn==1){
        isRiver=1
    deal.innerHTML += `<div class="dealer-card" id="dc5">
    <h1 id="${color}">${rc}</h1>
</div>`}

}
function restoreGame(){
    console.log(1)
    row1.innerHTML = ""
    row2.innerHTML = ""
    deal.innerHTML = ""
    isFlop=0
    isTurn=0
    isRiver=0
    isPlayers=0
    playerCards=[[]]
    deck=[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<suits.length;j++)
            deck.push(suits[j]+nums[i])
    }
    console.log(deck)
    document.getElementById("btn1").addEventListener("click",renderPlayers)
}

let row1 = document.getElementById("r1")
let row2 = document.getElementById("r2")
let deal = document.getElementById("bottom-row")
startGame()