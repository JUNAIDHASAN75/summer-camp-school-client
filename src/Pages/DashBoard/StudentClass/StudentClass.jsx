import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useEffect } from "react";


const StudentClass = () => {
    const {user} = useAuth()
    const [seleted , setSeleted] = useState();
    useEffect(()=>{
        fetch(`https://summer-camp-school-server-junaidhasan75.vercel.app/selects?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setSeleted(data))
    },[user])
    console.log(seleted)
    return (
        <div>
            {
                seleted.map(select=><div key={select._id} className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure><img className="w-96" src={select.image} alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title">Class Name{select.name}</h2>
                  <p>Instructor name{select.insName}</p>
                  <p>Available seats : {select.seats}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default StudentClass;