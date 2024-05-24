import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    console.log(location)
    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result=>{
            const loginUser = result.user;
            console.log(loginUser)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from, { replace: true })
        })
        .catch(error=>console.log(error))

        console.log(data)
    };
    return (

        <div>
            <Helmet>
                <title>PSS | Login</title>
            </Helmet>
            <div className=" min-h-screen  bgimg">
                <div className="hero-content mx-auto">

                    <div className=" w-full md:w-1/2 bg-transparent">
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body mt-20 space-y-5">
                            <h1 className="text-4xl font-semibold ">Login</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Email</span>
                                </label>
                                <input type="email" name='email'{...register("email", { required: true })} placeholder="email" className="input input-bordered bg-white bg-opacity-25" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Password</span>
                                </label>
                                <input type="password" name='password'{...register("password", { required: true })} placeholder="password" className="input input-bordered bg-transparent bg-white bg-opacity-25" />
                                {errors.password && <span>This field is required</span>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 text-white shadow-2xl font-semibold border-0 border-b-4 border-white hover:bg-orange-700" type="submit" value="Login" />

                            </div>

                            <div className=''>
                                <p className='text-center'>Are You New ? <Link className='text-orange-600 font-semibold hover:border-b hover:border-white' to="/signup">Create An Account</Link></p>
                            </div>
                        </form>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;