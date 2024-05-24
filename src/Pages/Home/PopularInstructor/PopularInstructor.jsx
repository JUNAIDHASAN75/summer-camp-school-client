import SectionTitle from "../../../Component/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


const PopularInstructor = () => {
    const [popular] = useClasses();
    const filterClass = popular.filter(item=>item.status === 'approved')
    return (
        <div className="my-20">
            <SectionTitle heading={'Popular Instructor'}></SectionTitle>
            <div className="mt-12">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="bg-white bg-opacity-10"
                >
                    {
                        filterClass.map(instractor => <SwiperSlide
                            key={instractor._id}>
                            <div className="w-full h-[50vh]  text-center space-y-4">
                                {/* <img className="md:w-1/3 lg:w-1/3 h-[] m-auto" src={instractor.instructorImage} /> */}
                                <h3 className="font-semibold text-2xl">Instructor: {instractor.insName}</h3>
                                <h3 className="font-semibold text-2xl">Students: {instractor.students}</h3>
                                <p className="font-semibold text-xl">Duration: {instractor.insEmail}</p>
                                <p className="font-semibold text-xl">Class: {instractor.name}</p>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default PopularInstructor;
