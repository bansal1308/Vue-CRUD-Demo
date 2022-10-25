<template>
   <div class="row">
      <div class="col-md-12 col-lg-8">
         <div class="row">
         </div>
      </div>
      <div class="col-md-12 col-lg-4">
         <div class="row">
         </div>
      </div>
   </div>
</template>
<script>
import iqCard from '@/components/bootstrap/Cards/iq-card.vue'
import ApexChart from '@/components/custom/charts/ApexChart.vue'
import Progressbar from '@/components/custom/progressbar/Progressbar.vue'
import Swiper from '@/components/custom/slider/Swiper.vue'
import Vue3autocounter from 'vue3-autocounter'
import SwiperSlide from '@/components/custom/slider/SwiperSlide.vue'
//import AOS from '@/plugins/aos/dist/aos.js'
export default {
   name: 'dashboard',
   components: {
      iqCard,
      ApexChart,
      Progressbar,
      Swiper,
      Vue3autocounter,
      SwiperSlide
   },
   data() {
      return {
         dmain: {
            series: [{
               name: 'total',
               data: [94, 80, 94, 80, 94, 80, 94]
            }, {
               name: 'pipline',
               data: [72, 60, 84, 60, 74, 60, 78]
            }],
            chart: {
               fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
               height: 245,
               type: 'area',
               toolbar: {
                  show: false
               },
               sparkline: {
                  enabled: false
               }
            },
            colors: ['#3a57e8', '#079aa2'],
            dataLabels: {
               enabled: false
            },
            stroke: {
               curve: 'smooth',
               width: 3
            },
            yaxis: {
               show: true,
               labels: {
                  show: true,
                  minWidth: 19,
                  maxWidth: 19,
                  style: {
                     colors: '#8A92A6'
                  },
                  offsetX: -5
               }
            },
            legend: {
               show: false
            },
            xaxis: {
               labels: {
                  minHeight: 22,
                  maxHeight: 22,
                  show: true,
                  style: {
                     colors: '#8A92A6'
                  }
               },
               lines: {
                  show: false // or just here to disable only x axis grids
               },
               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug']
            },
            grid: {
               show: false
            },
            fill: {
               type: 'gradient',
               gradient: {
                  shade: 'dark',
                  type: 'vertical',
                  shadeIntensity: 0,
                  gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                  inverseColors: true,
                  opacityFrom: 0.4,
                  opacityTo: 0.1,
                  stops: [0, 50, 80],
                  colors: ['#3a57e8', '#4bc7d2']
               }
            },
            tooltip: {
               enabled: true
            }
         },
         myChart1: {
            series: [55, 75],
            chart: {
               height: 260,
               type: 'radialBar'
            },
            colors: ['#4bc7d2', '#3a57e8'],
            plotOptions: {
               radialBar: {
                  hollow: {
                     margin: 10,
                     size: '50%'
                  },
                  track: {
                     margin: 10,
                     strokeWidth: '50%'
                  },
                  dataLabels: {
                     show: false
                  }
               }
            }

         },
         dactivity1: {
            series: [{
               name: 'Successful deals',
               data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35]
            }, {
               name: 'Failed deals',
               data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
            }],
            chart: {
               type: 'bar',
               height: 230,
               stacked: true,
               toolbar: {
                  show: false
               }
            },
            colors: ['#3a57e8', '#4bc7d2'],
            plotOptions: {
               bar: {
                  horizontal: false,
                  columnWidth: '28%',
                  endingShape: 'rounded',
                  borderRadius: 5
               }
            },
            legend: {
               show: false
            },
            dataLabels: {
               enabled: false
            },
            stroke: {
               show: true,
               width: 2,
               colors: ['transparent']
            },
            xaxis: {
               categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
               labels: {
                  minHeight: 20,
                  maxHeight: 20,
                  style: {
                     colors: '#8A92A6'
                  }
               }
            },
            yaxis: {
               title: {
                  text: ''
               },
               labels: {
                  minWidth: 19,
                  maxWidth: 19,
                  style: {
                     colors: '#8A92A6'
                  }
               }
            },
            fill: {
               opacity: 1
            },
            tooltip: {
               y: {
                  formatter: function (val) {
                     return '$ ' + val + ' thousands'
                  }
               }
            }
         },
         newoptions: {
            centeredSlides: false,
            loop: false,
            slidesPerView: 4,
            autoplay: false,
            spaceBetween: 32,
            breakpoints: {
               320: { slidesPerView: 1 },
               550: { slidesPerView: 2 },
               991: { slidesPerView: 3 },
               1400: { slidesPerView: 4 },
               1500: { slidesPerView: 5 },
               1920: { slidesPerView: 6 },
               2040: { slidesPerView: 7 },
               2440: { slidesPerView: 8 }
            },
            pagination: {
               el: '.swiper-pagination'
            },
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
            },

            // And if we need scrollbar
            scrollbar: {
               el: '.swiper-scrollbar'
            }
         }

      }
   },
   mounted() {
      /*if (typeof AOS !== typeof undefined) {
         AOS.init({
            disable: function () {
               var maxWidth = 996
               return window.innerWidth < maxWidth
            },
            once: true,
            duration: 800
         })
      }*/
   }
}
</script>
