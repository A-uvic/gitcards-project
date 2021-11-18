// Variables
const searchBtn = document.getElementById("search-btn")
const card = document.getElementById("card-container")

// Event Listeners
searchBtn.addEventListener("click", getCard)
searchBtn.addEventListener("keyup", getCard)

//Functions
function getCard() {
    let userName = document.getElementById("user-name").value.trim()
    const urlCard = fetch(`https://api.github.com/users/${userName}`)
    urlCard.then(response => response.json())
        .then(data => {
            if (data.login) {
                let html = `<div class="card">
                <div class="card-top">
                </div>
                <div class="card-img">
    
                    <img src="${data.avatar_url} alt="User image" width="180px" height="180px">
                </div>
                <h4 class="card-location"><i class="fas fa-map-marker-alt"></i> ${data.location}</h4>
                <a href="${data.blog}"class="card-title">${data.name}</a>
                <div class="bio">
                    <p>"${data.bio}"</p>
                </div>
                <div class="card-content">
                        <h3>Latest Repositories</h3>
                    <div className="repos">
                    </div>
                </div>
                <div class="content-lower">
                    <div class="followers">
                        <p>${data.followers} Followers <i class="fas fa-users"></i></p>
                    </div>
                    <div>${data.login}</div>
                    <div class="following">
                        <p>${data.following} Following <i class="fas fa-user"></i></p>
                    </div>
                </div>
            </div>`

                getRepo(`${userName}`, html)
            } else {
                alert("Invalid User")
            }
        });


}

function getRepo(userName, html) {
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => {

            for (var i = 1; i < 5; i++) {
                html += `<li>${data[i].name}</li>`
            }
            card.innerHTML = html
        })
}