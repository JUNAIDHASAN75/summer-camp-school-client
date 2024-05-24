import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../Component/SectionTitle";
import ShowClass from "../ShowClass/ShowClass";


const ClassesAdd = () => {
    const [allClasses , setAllClasses] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-junaidhasan75.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>setAllClasses(data))
    },[])
    console.log(allClasses)
    return (
        
        <div>
            <SectionTitle heading={'All Classes'}></SectionTitle>
            <div>
                {
                  allClasses.map(allclass=><ShowClass key={allclass._id} allclass={allclass}></ShowClass>)  
                }
            </div>
        </div>
    );
};

export default ClassesAdd;