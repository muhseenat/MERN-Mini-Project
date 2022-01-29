// import React,{createContext,useState,useEffect} from 'react'
// import axios from 'axios'


// const UserContext = createContext();


// function UserLoggedin({children}) {
 
//     const [loggedIn,setLoggedIn]=useState(undefined)

//     async function getLoggedIn(){
//         const loggedInRes =await axios.get('http://localhost:1337/loggedin')
//         setLoggedIn(loggedInRes.data);
//         console.log(loggedInRes.data);
//     }

//     useEffect(()=>{
//         getLoggedIn();
//     },[]);


//     return (
//         <UserContext.Provider value={{loggedIn,setLoggedIn}}>
//          {children}
//         </UserContext.Provider>
//     )
// }

// export  default UserContext
// export {UserLoggedin}

