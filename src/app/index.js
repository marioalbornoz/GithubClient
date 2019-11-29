const Ui = require('./ui');
const Github = require('./github');

const { client_id, client_secret } = require('./config.json');

const github = new Github(client_id, client_secret);
const ui = new Ui();

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
    const textSearch = document.getElementById('textSearch').value;
    if (textSearch !== '') {
        github.fetchUser(textSearch)
            .then(data => {
                if (data.message === 'Not Found') {
                    console.log("User not exist");
                }
                else {
                    ui.showProfile(data);
                }
            });


    }

    e.preventDefault();

})
