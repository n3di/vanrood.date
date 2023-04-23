import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

function Background() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <div className="background-overlay fixed top-0 left-0 right-0 bottom-0 z-[3]"></div>
        <Swiper
          speed={3000}
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 16000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="z-0 h-screen w-full absolute"
        >
          <SwiperSlide>
            <div className="background-image fixed top-0 left-0 right-0 bottom-0 z-[2]">
              <Image
                src="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/a129287628ef45a668f0_vanrood_44220253979_3816192307//thumb/thumb967640754-1920x1080.jpg"
                alt="Picture from vanRooD Stream"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="background-image fixed top-0 left-0 right-0 bottom-0 z-[2]">
              <Image
                src="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/4f493b013a6f8560fd66_vanrood_74543487350_3265019413//thumb/thumb946326704-1920x1080.jpg"
                alt="Picture from vanRooD Stream"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="background-image fixed top-0 left-0 right-0 bottom-0 z-[2]">
              <Image
                src="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/6223dae6dd7625776f94_vanrood_48267204149_2697502352//thumb/thumb941791913-1920x1080.jpg"
                alt="Picture from vanRooD Stream"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="background-image fixed top-0 left-0 right-0 bottom-0 z-[2]">
              <Image
                src="https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/231f7c33e51ecf199e97_vanrood_35817211879_1963204099//thumb/thumb980606013-1920x1080.jpg"
                alt="Picture from vanRooD Stream"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Background;
