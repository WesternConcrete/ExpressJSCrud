const express = require('express');
const app = express();
const port = 8000;
let users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }
 app.use(express.json());


const findUserByNameAndJob = (name, job) => { 
    return users['users_list'].filter( (user) => {
        if(name && job) {
            return user['name'] === name && user['job'] === job
        } else if (name) {
            return user['name'] === name
        } else if (job) {
            return user['job'] === job
        } else {
            return user
        }
    }); 
}
function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}

function addUser(user){
    users['users_list'].push(user);
}


function deleteUser(id){
    users = users['users_list'].filter(user => {
        return user.id !== id
    })
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});



app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;

    if (name != undefined || job != undefined){
        let result = findUserByNameAndJob(name, job);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.status(200).end();
});

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    deleteUser(id)
    res.status(200).end();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});