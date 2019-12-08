class Github {
    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.respos_count = 7;
        this.repo_sort = 'created: asc';
    }
    async fetchUser(user) {
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repositorieRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&
        	client_secret=${this.client_secret}&per_page=${this.respos_count}&sort=${this.repo_sort}`);
        const userData = await userDataRequest.json();
        const repositories = await repositorieRequest.json();
        return {
        	userData,
        	repositories
        };

    }
}

module.exports = Github;