const users = [
    {
        name:"Mincy W.", age:38, code:"US", country:"USA",
        image:"images/margaret.jpg", typing:true
    },
    {
        name:"Charles King.", age:44, code:"GB", country:"UK",
        image:"images/robert.jpg", typing:false
    },
    {
        name:"Hilda S.", age:27, code:"DE", country:"GERMANY",
        image:"images/helga.jpg", typing:true
    },
    {
        name:"Karen P.", age:41, code:"AU", country:"AUSTRALIA",
        image:"images/karen.jpg", typing:true
    },
    {
        name:"Risper E.", age:48, code:"SE", country:"SWEDEN",
        image:"images/lars.jpg", typing:true
    },
    {
        name:"James O.", age:51, code:"NY", country:"NEW YORK",
        image:"images/ingrid.jpg", typing:false
    },
    {
        name:"Nathaniel D.", age:31, code:"FR", country:"FRANCE",
        image:"images/pierre.jpg", typing:true
    },
    {
        name:"Purity R.", age:27, code:"IT", country:"ITALY",
        image:"images/sofia.jpg", typing:true
    },
    {
        name:"Billy W.", age:68, code:"CAN", country:"CANADA",
        image:"images/billy.jpg", typing:true
    },
    {
        name:"Eunice H.", age:49, code:"GBR", country:"UK",
        image:"images/Eunice.jpg", typing:false
    },
    {
        name:"Erick S.", age:37, code:"DE", country:"GERMANY",
        image:"images/erickson.jpg", typing:true
    },
    {
        name:"Jackson P.", age:41, code:"TUR", country:"TURKEY",
        image:"images/jackson.jpg", typing:true
    },
    {
        name:"Milton E.", age:48, code:"SE", country:"SWEDEN",
        image:"images/Paula.jpg", typing:true
    },
    {
        name:"Martin O.", age:51, code:"NO", country:"NORWAY",
        image:"images/samson.jpg", typing:false
    },
    {
        name:"Essy K.", age:31, code:"CA", country:"CALIFORNIA",
        image:"images/elizabeth.jpg", typing:true
    },
    {
        name:"Cindy R.", age:27, code:"TX", country:"TEXAS",
        image:"images/cindy.jpg", typing:true
    }
];


const profiles = document.getElementById("profiles");


function renderUsers(){

    profiles.innerHTML = "";

    users.forEach((user, index) => {


        profiles.innerHTML += `

            <div class="profile-card">

                <div class="profile-top">

                    <div class="avatar-wrapper">
                        <img src="${user.image}" alt="${user.name}">
                        <span class="online-dot"></span>
                    </div>

                    <div class="profile-info">

                        <div class="name">
                            ${user.name}
                            <span class="age">${user.age}y</span>
                        </div>

                        <div class="location">
                            <span>${user.code}</span>
                            <small>${user.country}</small>
                        </div>

                    </div>

                </div>

                <div class="divider"></div>

                <div class="status-row">

                    <div class="${user.typing ? "typing" : "looking"}">

                        ${
                            user.typing
                            ? `TYPING
                                <span class="dot">•</span>
                                <span class="dot">•</span>
                                <span class="dot">•</span>
                                
                              `
                            : `● LOOKING TO TALK`
                        }

                    </div>

                    <div class="active">
                        <a href="${base_link}">ACTIVE NOW</a>
                    </div>

                </div>

                <div class="buttons">

                     
                    <button class="teach-btn"> <a href="${base_link}"> CHAT</a>
                    </button>

                    <button class="chat-btn">
                        <a href="${base_link}"><img src="images/chaticon1.png"></a>
                    </button>

                </div>

            </div>
        `;
    });
}


renderUsers();

function changeTypingStatus(index){

    users[index].typing = !users[index].typing;

    renderUsers();

    startUserTimer(index);
}


function startUserTimer(index){

    const randomTime = Math.floor(Math.random() * 10000) + 20000;

    setTimeout(() => {
        changeTypingStatus(index);
    }, randomTime);
}


users.forEach((user, index) => {
    startUserTimer(index);
});
