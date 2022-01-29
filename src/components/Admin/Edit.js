import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate ,useParams} from 'react-router-dom';

function Edit() {
  const [name,setName] =useState('')
  const [email,setEmail] = useState('')
  const navigate = useNavigate()
  const {id}=useParams();
  console.log(id +"thisis id");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin");
      return false;
    }
    getDataById();
    
  }, [])
 

 async function getDataById(){
    const user= await axios.get('http://localhost:1337/admin/getuser/'+id)

  setName(user.data.resp.name);
  setEmail(user.data.resp.email);

  }
 
 
  async function updateuser(e){
     e.preventDefault();
     const newData={name,email,id}
    await  axios.post('http://localhost:1337/admin/update',newData).then(()=>{
        setName('');
        setEmail('')
        navigate('/admindashboard')
    })
    }


  

    return (
        <div>
            <body class="bg-white-500">
   
   <div class="container mx-auto p-2">
     <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
       <div class="text-center mb-8">
         <h1 class="font-bold text-2xl">Edit User</h1>
       </div>
       <form action="#">
         <div class="mt-5">
           <label for="username">Username </label>
           <input value={name} onChange={(e)=>setName(e.target.value)}
             type="text"
             id="username"
             class="block w-full p-2 border rounded border-gray-500"
           />
         </div>
         <div class="mt-5">
           <label for="email">Email</label>
           <input value={email} onChange={(e)=>setEmail(e.target.value)}
             type="email"
             id="email"
             class="block w-full p-2 border rounded border-gray-500"
           />
         </div>
         <div class="mt-10">
           <input onClick={updateuser}
             type="submit"
             value="Update"
             class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
           />
         </div>
       </form>
     </div>
   </div>
 </body>

        </div>
    )
}

export default Edit
