import { useEffect } from "react";
import { useState } from "react";
import Cover from "../../Component/Cover";
import cover1 from '../../assets/images/img5.jpg'
import ClassCart from "../ClassCart/ClassCart";
import { Helmet } from "react-helmet-async";



const ApprovedClass = () => {
    const [approvedClasses, setApprovedClasses] = useState([]);
    const approved = approvedClasses.filter(approve => approve.status === 'approved')
    
    useEffect(() => {
        fetch('https://summer-camp-school-server-junaidhasan75.vercel.app/classes')
            .then(res => res.json())
            .then(data => setApprovedClasses(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>PASS | Classes</title>
            </Helmet>
            <Cover img={cover1} title={'Approved classes'}></Cover>
            <div className="my-12">
                {
                    approved.map(item =><ClassCart key={item._id} item={item}></ClassCart>)
                }
            </div>
        </div>
    );
};

export default ApprovedClass;