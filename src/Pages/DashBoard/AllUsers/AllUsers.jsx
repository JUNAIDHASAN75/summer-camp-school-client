import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";


const AllUsers = () => {
    const [isAdminClicked, setIsAdminClicked] = useState(false);
    const [isInstructorClicked, setIsInstructorClicked] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user => {
        setIsInstructorClicked(true);
        setIsAdminClicked(false);
        
        console.log('admin click')
        fetch(`https://summer-camp-school-server-junaidhasan75.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.email} is admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        
        setIsAdminClicked(true);
        setIsInstructorClicked(false)
        fetch(`https://summer-camp-school-server-junaidhasan75.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.email} is instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = user => {
        console.log(user)
    }
    return (
        <div>
            <Helmet>
                <title>PSS | All Users</title>
            </Helmet>
            <h2 className="text-3xl font-semibold"> Total Users: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' : <div><button onClick={() => handleMakeAdmin(user)} disabled={isAdminClicked} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-blue-600">Make admin<FaUserAlt></FaUserAlt></button>
                                    </div>}
                                        {user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} disabled={isInstructorClicked} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-red-600">make instructor<FaUserAlt></FaUserAlt></button>}</td>
                                    <td><button onClick={() => handleDelete(user)} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-red-600 text-2xl"><FaTrashAlt></FaTrashAlt></button>
                                    </td>



                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;