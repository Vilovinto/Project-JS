fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let divBody = document.createElement('div');
        divBody.classList.add('users');
        document.body.appendChild(divBody);
        for (const user of users) {
            let divUsers = (document.createElement('div'));
            divUsers.classList.add('user');
            let id = document.createElement('p');
            id.classList.add('id');
            id.innerText = `ID: ${user.id}`;
            let name = document.createElement('p');
            name.classList.add('name');
            name.innerText = `Name: ${user.name}`;
            let button = document.createElement('button');
            button.innerText = 'Details';
            button.addEventListener('click', () => {
                location.href = 'user-details.html?id=' + user.id;
            })
            divUsers.append(id, name, button);
            divBody.appendChild(divUsers);
        }
    })