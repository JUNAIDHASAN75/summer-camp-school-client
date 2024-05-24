import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const ClassCart = ({ item }) => {
    const { _id, name, insName, seats, price, image } = item;
    const navigate = useNavigate()
    const location = useLocation();
    const { user } = useAuth()
    const handleSelect = item => {
        console.log('cliked', item)
        if (user && user?.email) {
            const selectClass = { selectClassId: _id, price, name, image, email: user?.email, insName, seats }
            fetch('https://summer-camp-school-server-junaidhasan75.vercel.app/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class select succesfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure><img className="w-96" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name : {name}</h2>
                    <p>Instructor Name : {insName}</p>
                    <p>Available Seats : {seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleSelect(item)} className="btn btn-outline bg-orange-600 text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCart;