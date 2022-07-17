import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from "react-router-dom";

function Create() {
    // const navigate = useNavigate()
    const [firstName,setFirstName] = useState('')
    const [lasttName,setLastName] = useState('')
    const [data, setData] = useState([])

    const update=(e)=>{
        let {id,firstName,lasttName} = e
        localStorage.setItem('id',id)
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lasttName',lasttName)
    }
    useEffect(()=>{
        axios
        .get('https://62d3e391cd960e45d44f818f.mockapi.io/TryDataBase')
        .then((res) => {
            console.log(res.data);
            //  Way one to display info in browser not console
            // setData(res.data[0].title);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [])
    const postData =()=>{
        axios
        // to add data to database"post"
        .post('https://62d3e391cd960e45d44f818f.mockapi.io/TryDataBase',{firstName,lasttName})//if use our database we write firstName:firstName....
        .then(res=>{console.log(res) 
            // after click on login trans to this page
            //navigate("/Card")
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <div>
        <input placeholder='First Nmae' onChange={(e)=>{setFirstName(e.target.value)}}></input>
        <input placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}></input>
        <button onClick={postData}>Login</button>
        <ul>
        {data.map((e) => (
          <>
          <li>{e.firstName}</li>
          <li>{e.lasttName}</li>
          <button onClick={update(e)}>Update</button>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Create