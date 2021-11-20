// Variables
const searchBtn = document.getElementById("search-btn")
const card = document.getElementById("card-container")
let inputText = document.getElementById("user-name")

// Event Listeners
searchBtn.addEventListener("click", getCard)
inputText.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        getCard()
    }
})

//Functions
function getCard() {
    let userName = document.getElementById("user-name").value.trim()
    const urlCard = fetch(`https://api.github.com/users/${userName}`)
    urlCard.then(response => response.json())
        .then(data => {
            if (data.login) {
                let following = data.following
                let followers = data.followers

                let html = `<div class="card">
                <div class="card-top">
                </div>
                    <a href="${data.avatar_url}"class="card-img">
                    <img src="${data.avatar_url} alt="User image" width="180px" height="180px">
                    </a>
                <h4 class="card-location"><i class="fas fa-map-marker-alt"></i> ${data.location}</h4>
                <a href="${data.blog}"class="card-title">${data.name}</a>
                <div class="bio">
                    <p>"${data.bio}"</p>
                </div>
                <div class="card-content">
                        <h3>Latest Repositories</h3><div class="repos">`

                getRepo(`${userName}`, html, followers, following)


                card.innerHTML = html
            } else {
                invalidUser()
            }


        });

    inputText.value = ""
}

function getRepo(userName, html, following, followers) {
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => {
            for (var i = 1; i < 5; i++) {
                html += `<a target="_blank" href="${data[i].html_url}"><p>${data[i].name}</p></a>`
            }

            html += `</div>
            <div class="content-lower">
                <div class="followers">
                    <p>${following} Followers <i class="fas fa-users"></i></p>
                </div>
                <div class="following">
                    <p>${followers} Following <i class="fas fa-user"></i></p>
                </div>
            </div>`

            card.innerHTML = html

        })

}

function invalidUser() {

}