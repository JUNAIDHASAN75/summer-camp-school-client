import SectionTitle from '../../../Component/SectionTitle';
import other1 from '../../../assets/images/other1.jpg'
import other2 from '../../../assets/images/other2.jpg'
import { Fade, Slide } from "react-awesome-reveal";

const Other = () => {
    return (
        <div className=' mt-12'>
            <Slide>
                <SectionTitle heading={'Our Other Projects'}></SectionTitle>
                <p>comming soon...</p>

            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <div className='flex gap-5 mb-12'>
                    <div className='w-full'><img className='w-full rounded-lg' src={other1} alt="" /></div>
                    <div className='w-full'><img className='w-full rounded-lg' src={other2} alt="" /></div>

                </div>
               
            </Fade>
            
        </div>
    );
};

export default Other;