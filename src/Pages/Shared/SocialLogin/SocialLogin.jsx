import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                const saveUser = { name: googleUser.displayName, email: googleUser.email }
                fetch('https://summer-camp-school-server-junaidhasan75.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)

                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="text-center">
                <button onClick={handleGoogle} className=" btn btn-circle text-2xl text-orange-600"> <FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;