import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const handleApproved = item => {
        fetch(`https://summer-camp-school-server-junaidhasan75.vercel.app/classes/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log('see the',data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'classes approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table z-0">
                    {/* head */}

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Ins Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-lg w-32 h-32">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.insName}</td>
                                <td>{item.status === 'approved' ? 'approved' : <div><button onClick={() => handleApproved(item)} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-red-600 text-xl">pending</button>
                                </div>}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllClasses;