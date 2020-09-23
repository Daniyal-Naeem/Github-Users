import React, { Component } from 'react';
import UserItem from "./Useritem";
import '../App.css';

class Users extends Component {
    
    state={
    users: [
    {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    },
    {
        id: "2",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    },
      
    {
        id: "3",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    }
      
        


]
    }
    render() {
        return (
            <div className= "userStyle">
            {this.state.users.map( user => (
               <UserItem key={user.id} user={user}/> 
            ))}
       
        </div>
            
        )
    }
    }
   



export default Users
