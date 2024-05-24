import useAuth from "../../../Hooks/useAuth";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle";
import { Helmet } from "react-helmet-async";

const image_hosting_token = import.meta.env.VITE_image_upload_token;
const AskClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`


    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { name,instructorName, instructorEmail,seats,limit,  price , status, students,} = data;
                    const classItem = {name,insName:instructorName,insEmail:instructorEmail,seats:parseInt(seats),limit:parseInt(limit),status, price:parseInt(price), students:parseInt(students), image:imgURL }
                    console.log('update class items',classItem)
                    axiosSecure.post('/classes', classItem)
                    .then(data=>{
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
    };
    console.log(errors);
    return (
        <div>
            <Helmet>
                <title>PSS | Add  A Class</title>
            </Helmet>
            <SectionTitle heading={"Add A Class"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="flex gap-12">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name"{...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructorName", { required: true, maxLength: 120 })} defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                </div>
                <div className="flex gap-12">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <input type="text"{...register("instructorEmail", { required: true, maxLength: 120 })} defaultValue={user?.email} placeholder={user?.email} className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number"{...register("seats", { required: true, maxLength: 120 })} placeholder="Seats" className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                </div>
                <div className="flex gap-12">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">limit</span>
                        </label>
                        <input type="number"{...register("limit", { required: true, maxLength: 120 })} placeholder="limit" className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"{...register("price", { required: true, maxLength: 120 })} placeholder="Price" className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                </div>
                <div className="flex gap-12">
                    <div className="form-control w-full border  mt-8 ">
                        <select {...register("status", { required: true })}>
                            <option>pending</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Students</span>
                        </label>
                        <input type="number"{...register("students", { required: true, maxLength: 120 })} placeholder="students" className="input input-bordered w-full " />
                        <label className="label">
                        </label>
                    </div>
                </div>
                <div className="form-control w-full mt-5 ">
                    <label className="label">
                        <span className="label-text">Pick a file</span>

                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-1/4 " />
                </div>
                <input className="btn btn-outline bg-orange-600 text-white font-semibold mt-8" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AskClasses;