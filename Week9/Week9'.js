function getAjaxData(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.onload = () => resolve(JSON.parse(req.responseText))
        req.onerror = () => reject(req.status.responseText)

        req.open('GET', url)
        req.send()
    })
}


let dataGeting = getAjaxData('https://jsonplaceholder.typicode.com/users')

dataGeting
    .then(main)
    .catch(main1)

let users = [];

function main(data) {
    users = data;

    const todoRequests = data
        .map(user => {
            //console.log(user)
            let todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;

            return getAjaxData(todosURL);
        });
    Promise.all(todoRequests)
        .then(function(todos) {
            // console.log(todos);


            users.forEach((user, i) => {
                user.todos = todos[i];
            });
            console.log(users);
        })
        .catch(main1);
}

function main1(err) {
    console.log('Error loading users', err)
}
