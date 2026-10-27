const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const chatOverlay = document.getElementById("chatOverlay");
const base_link='https://mulaearn.com/register.php?ref=EstherH'

openBtn.addEventListener("click", function () {

    chatOverlay.style.display = "flex";

});


closeBtn.addEventListener("click", function () {

    chatOverlay.style.display = "none";

});






const liveActivity = document.getElementById("liveActivity");

const statuses = [ " $ 86"," $ 21"," $ 11", "$ 15", "$ 12","$ 58", "$ 49"];

const names = [ "ANITA O.","MERCY J.","SARAH M.","BRENDA K.","JOY P.","STACY N.","MARGARET W.",   "ROBERT H."
];
const times=['just now','1m ago','3m 4s ago','4m ago','5m ago']

function randomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}

function createActivity(){
    return `
        <div class="activity">
            ${randomItem(names)}
            <span class="activity-status">${randomItem(statuses)}</span>
            <span class="activity-time">${randomItem(times)}</span>
        </div>
    `;
}

let activities = "";

for(let i = 0; i < 15; i++){
    activities += createActivity();
}

liveActivity.innerHTML = `
    <div class="activity-track">
        ${activities}
        ${activities}
    </div>
`;
