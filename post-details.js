let divBody = document.createElement('div');
document.body.appendChild(divBody);
divBody.classList.add('divBody');
let urlPost = new URL(location.href).searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${urlPost}`)
    .then(value => value.json())
    .then(post => {
        console.log(post)
        let divID = document.createElement('div');
        divID.classList.add('divID');
        let id = document.createElement('p');
        id.innerText = `UserID: ${post.userId}
                ID: ${post.id}
                Title: ${post.title}
                Body: ${post.body}
                `
        divID.appendChild(id);
        let divComments = document.createElement('div');
        divComments.classList.add('divComments');
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(value => value.json())
            .then(comments => {
                for (const comment of comments) {
                    let divName = document.createElement('div');
                    divName.classList.add('divName');
                    let name = document.createElement('p');
                    name.innerText = `Name ${comment.id}: ${comment.name}`;
                    divName.appendChild(name);
                    divComments.appendChild(divName);
                }
            })
        let divButton = document.createElement('div');
        divButton.classList.add('divButton');
        let button1 = document.createElement('button');
        button1.innerText = 'Return to start';
        button1.addEventListener('click', () => {
            location.href = 'index.html';
        })
        let button2 = document.createElement('button');
        button2.innerText = 'Return the previous page';
        button2.addEventListener('click', () => {
            location.href = 'user-details.html?id=' + post.userId;
        })
        divButton.append(button1, button2);
        divBody.append(divID, divComments, divButton);
    })