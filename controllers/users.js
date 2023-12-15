import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) => {
    console.log(users);
    res.send(users);
    return
    res.send(users)
}

export const getUser = (req,res) => {
    console.log(req.params);
    const { id } = req.params;
    // console.log(id);
    const founduser = users.find((user) => user.id == id);
    res.send(founduser);
}

export const createUser = (req,res) => {
    console.log("Post req send");

    const  userid = uuidv4();

    const user = req.body;
    const userwithPrio = {...user, id:userid};

    users.push(userwithPrio);
    res.send(`user with name ${user.firstname} added to DB`);
}

export const deleteUser = (req,res) => {
    const {id} = req.params;
    users =users.filter((user) => user.id !== id);
    res.send(`User with id: ${id} is removed from db`);
}

export const updateUserPatch = (req,res) => {
    const {id} = req.params;
    const user =users.find((user) => user.id == id);

    const {firstname, lastname, age} = req.body;

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`User with id: ${id} is updated with patch in db`);
}