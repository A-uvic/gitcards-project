// Variables
const searchBtn = document.getElementById("search-btn")
const card = document.getElementById("card-container")

// Event Listeners
searchBtn.addEventListener("click", getUser)

//Functions
function getUser() {
    let userName = document.getElementById("user-name").value.trim()
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            if (data.login) {

                let html = `<div class="card">
                <div class="card-top">
                </div>
                <div class="card-img">
    
                    <img src="who.jpg" alt="User image" width="180px" height="180px">
                </div>
                <h4 class="card-location"><i class="fas fa-map-marker-alt"></i> Somewhere</h4>
                <h1 class="card-title">Some Body</h1>
                <div class="bio">
                    <p> Description </p>
                </div>
                <div class="card-content">
                    <div class="content-left">
                        <h3>Nick-Name:</h3>
                        <p>Nick</p>
                    </div>
                    <div class="content-right">
                        <h3>Latest Repositories:</h3>
                        <ul>
                            <li class="">#</li>
                            <li class="">#</li>
                            <li class="">#</li>
                            <li class="">#</li>
                        </ul>
                    </div>
                </div>
                <div class="content-lower">
                    <div class="followers">
                        <p>X Followers <i class="fas fa-users"></i></p>
                    </div>
                    <div class="following">
                        <p>Y Following <i class="fas fa-user"></i></p>
                    </div>
                </div>
            </div>`
                card.innerHTML = html
            }

        });

}