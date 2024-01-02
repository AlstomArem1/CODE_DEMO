import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Appswiper.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import dtls from "./dtls.jpg";
import lsmt from "./lsmt.jpg";
import tuv from "./tuv.jpg";
import ips from "./iphones.webp";
export default function Appswiper() {
    return (
        <div className="container" >
            <h1 className="heading">
                <Swiper

                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    pagination={{ el: '.swiper-pagination', clickable: true }}

                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                >
                    <SwiperSlide >
                        <img src={dtls} alt='slider_image' />
                        <div className='swiper-blog'>
                            <p>Cuộc gọi điện thoại đầu tiên trong lịch sử được thực hiện vào ngày 10/3/1876, bởi nhà phát minh, nhà khoa học người Scotland Alexander Graham Bell. Ông được coi là cha đẻ của điện thoại đã làm thay đổi cách giao tiếp của con người.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={lsmt} alt='slider_image' />
                        <div className='swiper-blog'>
                            <p>John von Neumann (Neumann János; 28 tháng 12 năm 1903 – 8 tháng 2 năm 1957) là một nhà toán học người Mỹ gốc Hungary và là một nhà bác học thông thạo nhiều lĩnh vực đã đóng góp vào vật lý lượng tử, giải tích hàm, lý thuyết tập hợp, kinh tế, khoa học máy tính, giải tích số, động lực học chất lưu, thống kê và nhiều lĩnh vực toán học khác</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={tuv} alt='slider_image' />
                        <div className='swiper-blog'>
                            <p>Đó là Philo Farnsworth, sinh ra tại Indian Springs, Utah, Mỹ. Từ khi còn nhỏ, Farnsworth đã tỏ ra rất hứng thú với điện và nung nấu ý tưởng về một thiết bị mà ông gọi là “máy phân tích hình ảnh”. Lúc đó, Farnsworth chỉ mới 14 tuổi.</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ips} alt='slider_image' />
                        <div className='swiper-blog'>
                            <p>Ngày nay, iPhone vẫn sở hữu những yếu tố cốt lõi nói trên nhưng phát triển lên một tầm cao mới.
                                <br />
                                Qua từng năm, Apple đã liên tục nâng cấp, tinh chỉnh về thiết kế, cấu hình, camera. Đồng thời bổ sung nhiều tính năng sinh trắc học mới: nhận diện vân tay, nhận diện khuôn mặt… Điều này đã và đang khiến, iPhone trở thành một thiết bị không thể thiếu của hàng tỷ người trên thế giới.</p>
                        </div>
                    </SwiperSlide>
                    <div className='slider_controler'>
                        <div className='swiper-button-prev slider-arrow'>
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className='swiper-button-next slider-arrow'>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div className='swiper-pagination'></div>


                </Swiper>
            </h1>
        </div>
    )
}