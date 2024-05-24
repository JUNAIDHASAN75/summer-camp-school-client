
import { Link, useRouteError } from 'react-router-dom';
import erroing from '../assets/images/error.jpg'
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className=''>
      <div className=' flex justify-center items-center'>
        <img className=' w-1/2 mt-5 rounded-5' src={erroing} alt="" />
        <div className=' text-center w-full'>
          <h2 className='mb-8 font-bold text-7xl text-gray-600'>
            <span className='text-orange-600'>Error</span> {status || 404}
          </h2>
          <p className='fs-3 ms-3'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='btn'
          >
            <button className=''>Back to homepage</button>
          </Link>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;