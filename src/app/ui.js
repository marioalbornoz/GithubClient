class Ui {
    constructor() {
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
                <span class=" badge badge-info d-block"> 
                        Blog: ${user.blog}
                </span>
                
            </div>
            </div>
            
        `;
        this.clearMessage();

    }

    showMessage(message, classCss){
        const div = document.createElement('div');
        div.className= classCss;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }
    clearMessage() {
        const alertFound = document.querySelector('.alert');
        if(alertFound) {
            alertFound.remove();
        }
    }

    showRepositories(repositories) {
        let template=' ';
        repositories.forEach(repo => {
            template += `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                </div>
            </div>
            `;
        });
        document.getElementById('repositories').innerHTML = template;
    }
}

module.exports = Ui;