import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const onSubmit = data => {
        console.log(data.email)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email, image:data.photo}
                        fetch('https://summer-camp-school-server-junaidhasan75.vercel.app/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(saveUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Profile upload',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
        console.log(data)
    };

    return (
        <div>
            <Helmet>
                <title>PSS | Sign Up</title>
            </Helmet>
            <div className=" min-h-screen  bgimg">
                <div className="hero-content mx-auto">

                    <div className=" w-full md:w-1/2 bg-transparent">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body mt-12 space-y-5">
                            <h1 className="text-4xl font-semibold ">Register</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered bg-white bg-opacity-25" />
                                {errors.name && <span className='text-orange-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered bg-white bg-opacity-25" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered bg-transparent bg-white bg-opacity-25" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be six characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password must be less than characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must have one uppercase,one lowercase, one number and one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", {
                                    required: true, validate: (value) =>
                                        value === watch('password') || 'The passwords do not match',
                                })} placeholder="Confirm Password" className="input input-bordered bg-transparent bg-white bg-opacity-25" />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold text-xl">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered bg-white bg-opacity-25" />
                                {errors.photo && <span className='text-orange-600'>Photo URL is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 text-white shadow-2xl font-semibold border-0 border-b-4 border-white hover:bg-orange-700" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <div className=''>
                            <p className='text-center'>Already Have An Account ? <Link className='text-orange-600 font-semibold hover:border-b hover:border-white' to="/login">Go To Login</Link></p>
                        </div>
                        <div className="divider border-white"></div>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;