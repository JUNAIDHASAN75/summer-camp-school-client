import { useEffect, useState } from "react";

const useClasses =()=>{
    const [popular ,setPopular] = useState([])
    useEffect(()=>{
        fetch('https://summer-camp-school-server-junaidhasan75.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
            const sortedData = data.sort((a, b) => b.students - a.students);
            const topClasses = sortedData.slice(0, 6);
            setPopular(topClasses)
        })
    },[])
    return [popular]
    
}
export default useClasses;