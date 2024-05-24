import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../../assets/images/im1.jpg'
import banner2 from '../../../assets/images/img2.jpg'
import banner3 from '../../../assets/images/img3.jpg'
import banner4 from '../../../assets/images/img4.jpg'
import banner5 from '../../../assets/images/img5.jpg'
import banner6 from '../../../assets/images/img6.jpg'
import BannerCover from "../../../Component/BannerCover";


const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><BannerCover img={banner5} title={"Rise Above the Rim: Hoop Dreams Unleashed!"} disc={"Unleash your inner baller and dominate the court in our electrifying basketball extravaganza! Get ready for a high-flying showcase of skill, passion, and slam-dunk excitement!"}></BannerCover></SwiperSlide>
        <SwiperSlide><BannerCover 
        img={banner6}
        title={"Cricket Mania: Unleash the Spirit of the Gentleman's Game!"}
        disc={"Step onto the pitch and immerse yourself in the exhilarating world of cricket. Witness epic battles, breathtaking strokes, and fierce competition in this ultimate showcase of skill and sportsmanship."}></BannerCover></SwiperSlide>
        <SwiperSlide><BannerCover 
        img={banner1}
        title={ "Soccer Showdown: Where Legends Are Made!"}
        disc={ "Get ready to witness the exhilarating clash of titans as football's finest compete for glory. Feel the adrenaline surge as skills, teamwork, and passion ignite the field, creating unforgettable moments in the world's most beloved sport."}></BannerCover></SwiperSlide>
        <SwiperSlide><BannerCover 
        img={banner2}
        title={ "Soccer Showdown: Where Legends Are Made!"}
        disc={ "Get ready to witness the exhilarating clash of titans as football's finest compete for glory. Feel the adrenaline surge as skills, teamwork, and passion ignite the field, creating unforgettable moments in the world's most beloved sport."}></BannerCover></SwiperSlide>
        <SwiperSlide><BannerCover 
        img={banner3}
        title={ "Soccer Showdown: Where Legends Are Made!"}
        disc={ "Get ready to witness the exhilarating clash of titans as football's finest compete for glory. Feel the adrenaline surge as skills, teamwork, and passion ignite the field, creating unforgettable moments in the world's most beloved sport."}></BannerCover></SwiperSlide>
        <SwiperSlide><BannerCover 
        img={banner4}
        title={ "Soccer Showdown: Where Legends Are Made!"}
        disc={ "Experience the bone-crushing intensity of rugby as warriors collide in a fierce battle for supremacy. Brace yourself for heart-pounding tackles, strategic gameplay, and a display of raw power that will leave you in awe. Join us for a spectacle that embodies strength, teamwork, and the indomitable spirit of the game."}></BannerCover></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;