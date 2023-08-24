<template>
  <div class="news">
    <div class="container">
      <div class="news-wrapper" v-if="mobile == false">
        <div class="newsBlock">
          <div class="news-image basic">

            <div class="content">
              <img src="../assets/main6.webp" alt="">
              <div class="news-text">
                <h2>Placeat cumque reiciendis perferendis assumenda laboriosam amet consectetu.</h2>
                <p class="fst-italic">ZeinPharma / 2022</p>
              </div>
            </div>

          </div>
        </div>
        <div class="newsBlock">
          <div class="news-image secondry">

            <div class="content">
              <img src="../assets/main5.webp" alt="">
              <div class="news-text">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p class="fst-italic">ZeinPharma / 2022</p>
              </div>
            </div>


            <div class="content">
              <img src="../assets/main3.webp" alt="">
              <div class="news-text">
                <h2>Tenetur dolores praesentium amet ea voluptatum</h2>
                <p class="fst-italic">ZeinPharma / 2022</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <swiper v-else :grabCursor="true" :effect="'creative'" :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="content">
            <img src="../assets/main5.webp" alt="">
            <div class="news-text">
              <h2>Placeat cumque reiciendis perferendis assumenda laboriosam amet consectetu.</h2>
              <p class="fst-italic">ZeinPharma / 2022</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <img src="../assets/main4.webp" alt="">
            <div class="news-text">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p class="fst-italic">ZeinPharma / 2022</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content">
            <img src="../assets/main3.webp" alt="">
            <div class="news-text">
              <h2>Tenetur dolores praesentium amet ea voluptatum</h2>
              <p class="fst-italic">ZeinPharma / 2022</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>



      <LatestNews></LatestNews>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import LatestNews from '../components/Home/LatestNews.vue';
// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCreative } from 'swiper/modules';
const modules = [EffectCreative];
// end Import Swiper styles

let mobile = ref(false)
onMounted(() => {
  window.matchMedia("(max-width: 991px)").matches ? mobile.value = true : mobile.value = false;
  window.addEventListener("resize", function () {
    window.matchMedia("(max-width: 991px)").matches ? mobile.value = true : mobile.value = false;
  })
})
</script>
<style lang="scss" scoped>
@import "../styles/style.scss";

.news {
  @media (min-width: 768px) {
    padding: 40px;
  }

  .container {
    overflow-y: hidden;

    .news-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;

      .newsBlock {
        .news-image {
          &.basic {
            .content {
              position: relative;
              height: 505px;
              margin: 5px;
              overflow: hidden;

              &:hover {
                img {
                  transform: scale3d(1.1, 1.1, 1);
                }
              }

              img {
                width: 100%;
                height: 100%;
                transition: all 0.3s ease-in-out;
              }

              .news-text {
                position: absolute;
                bottom: 0;
                padding: 60px;
                color: #fff;

                h2 {
                  text-decoration: underline;
                  text-decoration-color: #283890;
                  font-size: 25px;
                  margin-bottom: 40px;
                }

                p {
                  font-size: 16px;
                  color: #eee;
                }

                @media (max-width: 991px) {
                  padding: 40px;

                  h2 {
                    font-size: 20px;
                    margin-bottom: 30px;
                  }

                  p {
                    font-size: 14px;
                  }
                }

              }
            }
          }

          &.secondry {
            .content {
              position: relative;
              height: 250px;
              margin: 5px;
              overflow: hidden;

              &:hover {
                img {
                  transform: scale3d(1.1, 1.1, 1);
                }
              }

              img {
                width: 100%;
                height: 100%;
                transition: all 0.3s ease-in-out;
              }

              .news-text {
                position: absolute;
                bottom: 0;
                padding: 30px;
                color: #fff;

                h2 {
                  font-size: 22px;
                }

                p {
                  font-size: 14px;
                  color: #eee;
                }

                @media (max-width: 991px) {
                  padding: 20px;

                  h2 {
                    font-size: 15px;
                    margin-bottom: 30px;
                  }

                  p {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .swiper {
      margin: 20px auto;
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: #fff;

      .content {
        position: relative;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }

        .news-text {
          position: absolute;
          bottom: 0;
          padding: 20px;
          color: #fff;

          h2 {
            font-weight: bold;
            font-size: 20px;
          }

          p {
            font-size: 16px;
            margin: 0;
          }


          @media (max-width: 479px) {
            padding: 10px;

            h2 {
              font-size: 16px;
            }

            p {
              font-size: 12px;
            }
          }
        }

      }
    }

  }
}
</style>
  