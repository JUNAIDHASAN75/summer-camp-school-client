import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Component/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import InsCart from "./InsCart/InsCart";


const InstructorPages = () => {
    const [axiosSecure]=useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const insUser = users.filter(item=>item.role === 'instructor')
    console.log(insUser)
    return (
        <div className="mt-0">
            <div className="mb-12">
            <SectionTitle heading={'Instructor'}></SectionTitle>
            <div className="grid grid-cols-3 gap-5 my-20">
            {
                insUser.map(user=><InsCart key={user._id}
                user={user}
                ></InsCart>)
            }
            </div>

            </div>
        </div>
    );
};

export default InstructorPages;