const cors = require('cors');
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
 app.use(cors());
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
    user['id'] = Math.random().toString(36).substr(2, 9);
    users['users_list'].push(user);
    return user
}


function deleteUser(id){
    const prev_user_length = users['users_list'].length
    users['users_list'] = users['users_list'].filter(user => {
        return user.id !== id
    })
    if(prev_user_length - 1 == users['users_list'].length) {
        return true
    } else {
        return false
    }
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
    const new_user = addUser(userToAdd);
    res.status(201).send(new_user);
});

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    if(deleteUser(id)) {
         res.status(204).end();
    } else {
         res.status(404).end();
    }
   
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});