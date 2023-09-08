import React, { useState } from 'react'

export const LoginForm = () => {
    const [data,setData] =useState({
        username:'',
        password:''
    })
    const {username,password}=data;
    const onChange=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(data);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' name="username" value={username}
            onChange={onChange} placeholder='enter Username' /><br />
            <input type='password' name="password" value={password}
            onChange={onChange} placeholder='enter password' /><br />
            <input type="submit" name="submit" />
        </form>
    </div>
  )
}
