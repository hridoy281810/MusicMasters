
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="slider-bg ">
          <div className="bg-slate-600 bg-opacity-50 text-center   h-[100vh]  flex flex-col items-center justify-center p-10 md:p-24 gap-4">
          <h3 className="text-white uppercase font-bold  sm:text-2xl md:text-5xl">Discover the Rhythm of Music</h3>
          <p className="text-white  md:text-xl text-center banner-p-hidden ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo dignissimos beatae dolorem earum incidunt aut fuga, recusandae porro officiis. </p>
         <Link to='/registration'> <button className="btn btn-sm  md:btn-md btn-accent ">Registration Now</button></Link>
        </div></div></SwiperSlide>
        <SwiperSlide>
          <div className=" slider-bg2"  >
          <div className="bg-slate-600 text-center bg-opacity-50 h-[100vh] flex flex-col items-center justify-center p-24 gap-4">
            <h3 className="text-white uppercase font-bold sm:text-2xl md:text-5xl">
              Unlock Your Musical Potential
            </h3>
            <p className="text-white text-xl text-center md:px-16 banner-p-hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo dignissimos beatae dolorem earum incidunt aut fuga, recusandae porro officiis. </p>
            <Link to='/registration'> <button className="btn btn-sm  md:btn-md btn-accent ">Registration Now</button></Link>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className=" slider-bg3"  >
        <div className="bg-slate-600 bg-opacity-50 text-center h-[100vh] flex flex-col items-center justify-center p-24 gap-4">
            <h3 className="text-white uppercase font-bold sm:text-2xl md:text-5xl">
              Ignite Your Passion for Music
            </h3>
            <p className="text-white text-xl text-center md:px-16 banner-p-hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo dignissimos beatae dolorem earum incidunt aut fuga, recusandae porro officiis. </p>
            <Link to='/registration'> <button className="btn btn-sm  md:btn-md btn-accent ">Registration Now</button></Link>
          </div>
          </div></SwiperSlide>
        <SwiperSlide>
        <div className=" slider-bg4"  >
        <div className="bg-slate-600 text-center bg-opacity-50 h-[100vh] flex flex-col items-center justify-center p-24 gap-4">
            <h3 className="text-white uppercase font-bold sm:text-2xl md:text-5xl">
            Experience the Joy of Music
            </h3>
            <p className="text-white text-xl text-center md:px-16 banner-p-hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo dignissimos beatae dolorem earum incidunt aut fuga, recusandae porro officiis. </p>
            <Link to='/registration'> <button className="btn btn-sm  md:btn-md btn-accent ">Registration Now</button></Link>
          </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}


export default Slider;