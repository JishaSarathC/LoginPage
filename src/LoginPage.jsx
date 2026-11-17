import React, { useState } from "react";
export default function LoginPage(){
    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const [message, setMessage]=useState("");
    
    function handleSubmit(e){
        e.preventDefault();
  
    if
    (userName==="" || password===""){
        alert("Please fill out this page");
    }
    else if(userName==="user" && password==="password"){
        setMessage("Welcome, user");

        setUserName("");
        setPassword("");
        
    }else
      {
        setMessage("Invalid Username or Password");
    
    }
    
      }
    return(
        <div>
            {message==="Welcome, user"? (
                <h1>Welcome, user</h1>
            ):(
                <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="uname">
                    Username:
                </label>
                <input
                type="text"
                id="uname"
                name="uname"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                /><br /><br />
                <label htmlFor="pname">Password:</label>
                <input
                type="password" 
                id="pname"
                name="pname"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/><br></br>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
            </>
            )}
        </div>
    )
}