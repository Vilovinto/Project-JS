let userid = new URL(location.href).searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + userid)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        let divBody = document.createElement('div');
        divBody.classList.add('body');
        document.body.appendChild(divBody);
        let name = document.createElement('h1');
        name.innerText = `Name - ${user.name}`;
        name.classList.add('name');
        let id = document.createElement('p');
        id.innerText = `ID: ${user.id}`;
        id.classList.add('id');
        let divInfo = document.createElement('div');
        divInfo.classList.add('divInfo');
        let userName = document.createElement('p');
        userName.innerText = `Username: ${user.username}
            Email: ${user.email}
            Phone: ${user.phone}`
        divInfo.append(userName);
        let divAddress = document.createElement('div');
        divAddress.classList.add('divAddress');
        let h2Address = document.createElement('h2');
        h2Address.innerText = 'Address';
        h2Address.classList.add('Address');
        let pAddress = document.createElement('p');
        let address = user.address;
        pAddress.innerText = `Street: ${address.street}
            Suite: ${address.suite}
            City: ${address.city}
            Zipcode: ${address.zipcode}
            Geo:  lat: ${address.geo.lat} lng: ${address.geo.lng}`
        divAddress.append(h2Address, pAddress);
        let divCompany = document.createElement('div');
        divCompany.classList.add('divCompany');
        let h2Company = document.createElement('h2');
        h2Company.innerText = 'Company';
        h2Company.classList.add('h2Company');
        let pCompany = document.createElement('p');
        let company = user.company;
        pCompany.innerText = `Company: ${company.name}
            Use: ${company.catchPhrase}
            Product: ${company.bs}`
        divCompany.append(h2Company, pCompany);
        divBody.append(name, id, divInfo, divAddress, divCompany);
        let divButton = document.createElement('div');
        document.body.appendChild(divButton);
        divButton.classList.add('divButton');
        let button = document.createElement('button');
        button.innerText = 'Post of current user';
        divButton.appendChild(button);
        let bodyDiv = document.createElement('div');
        bodyDiv.classList.add('bodyDiv');
        document.body.appendChild(bodyDiv);
        let urlPost = new URL(location.href).searchParams.get('id');
        let flag = false;
        button.addEventListener('click', () => {
            if (!flag) {
                fetch(`https://jsonplaceholder.typicode.com/users/${urlPost}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        console.log(posts)
                        for (const post of posts) {
                            console.log(post)
                            let divPosts = document.createElement('div')
                            divPosts.classList.add('divPosts')
                            let pPost = document.createElement('p')
                            pPost.innerText = `Post: ${post.title}`
                            let info = document.createElement('a')
                            info.href = `post-details.html?id=${post.id}`
                            info.innerText = 'Information of this post';
                            info.addEventListener("click", () => {
                                location.href = "post-details?id=" + post.id
                            })
                            divPosts.append(pPost, info)
                            bodyDiv.appendChild(divPosts)
                        }
                    })
                flag = true;
            }
        });
    })