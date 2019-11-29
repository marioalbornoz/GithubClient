class Ui {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class=" card mt-2 animated bounceInLeft ">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                <h3 class="card-tittle">${user.name} / ${user.login}</h3>
                <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}">View profile</a>
                <span class=" badge badge-success"> 
                        Followers: ${user.followers}
                </span>
                <span class=" badge badge-primary"> 
                        Followin: ${user.following}
                </span>
            </div>
            </div>
            
        `;
        
    }
}

module.exports = Ui;