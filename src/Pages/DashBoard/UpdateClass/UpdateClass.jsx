import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Component/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const UpdateClass = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axiosSecure.put(`/classes`)    
        console.log(data)
    };
    console.log(errors)
    return (
        <div className='w-[50%] mx-auto text-center'>
            <SectionTitle heading={'Update Class'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
                <select className='text-3xl font-semibold mr-12' {...register("status", { required: true })}>
                    <option value="approved">approved</option>
                </select>
                <input type="submit" value="Updated" />
            </form>
        </div>
    );
};

export default UpdateClass;