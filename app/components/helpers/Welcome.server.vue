<template>
   <div class="fixed inset-0 z-[9999] bg-black text-white">
      <svg class="card" viewBox="0 50 840 440">
         <defs>
            <linearGradient
               id="gradient-1"
               gradientUnits="userSpaceOnUse"
               x1="420"
               y1="275"
               x2="420"
               y2="167"
               gradientTransform="matrix(1 0 0 -1 0 442)">
               <stop offset="0.464" style="stop-opacity: 0.2"></stop>
               <stop offset="0.9" style="stop-opacity: 0"></stop>
            </linearGradient>
            <linearGradient
               id="gradient-2"
               gradientUnits="userSpaceOnUse"
               x1="420"
               y1="325"
               x2="420"
               y2="117.001"
               gradientTransform="matrix(1 0 0 -1 0 442)">
               <stop offset="0.464" style="stop-opacity: 0.2"></stop>
               <stop offset="1" style="stop-opacity: 0"></stop>
            </linearGradient>
            <linearGradient
               id="gradient-3"
               gradientUnits="userSpaceOnUse"
               x1="420"
               y1="382"
               x2="420"
               y2="60.001"
               gradientTransform="matrix(1 0 0 -1 0 442)">
               <stop offset="0.464" style="stop-opacity: 0.16"></stop>
               <stop offset="0.9" style="stop-opacity: 0"></stop>
            </linearGradient>
            <linearGradient
               id="gradient-4"
               gradientUnits="userSpaceOnUse"
               x1="420"
               y1="488.788"
               x2="420"
               y2="-46.967"
               gradientTransform="matrix(1 0 0 -1 0 442)">
               <stop offset="0.089" style="stop-opacity: 0.1"></stop>
               <stop offset="0.464" style="stop-opacity: 0.27"></stop>
               <stop offset="0.896" style="stop-opacity: 0"></stop>
            </linearGradient>
            <linearGradient
               id="gradient-5"
               gradientUnits="userSpaceOnUse"
               x1="420"
               y1="610"
               x2="420"
               y2="-168.179"
               gradientTransform="matrix(1 0 0 -1 0 442)">
               <stop offset="0.172" style="stop-opacity: 0"></stop>
               <stop offset="0.464" style="stop-opacity: 0.21"></stop>
               <stop offset="0.771" style="stop-opacity: 0"></stop>
            </linearGradient>
            <linearGradient id="gradient-vercel" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.5" y2="1">
               <stop offset="0.3" style="stop-color: var(--g1)"></stop>
               <stop offset="0.5" style="stop-color: var(--g2)"></stop>
               <stop offset="0.8" style="stop-color: var(--g1)"></stop>
            </linearGradient>
            <linearGradient id="gradient-react" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.1" y2="1">
               <stop offset="0.3" style="stop-color: var(--primary)"></stop>
               <stop offset="0.5" style="stop-color: #bbf0ff"></stop>
               <stop offset="0.8" style="stop-color: var(--primary)"></stop>
            </linearGradient>
            <symbol id="logo" viewBox="0 0 124 124" fill="none">
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
                  fill="#80EEC0" />
               <path
                  d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z"
                  fill="#00DC82" />
            </symbol>
            <linearGradient id="#mask-gradient">
               <stop offset="0" stop-color="black"></stop>
               <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <mask id="mask">
               <rect x="0" y="0" width="200" height="200" fill="url(#mask-gradient)"></rect>
            </mask>
         </defs>
         <g class="orbits" transform="translate(420, 220)">
            <g>
               <circle class="orbit" style="stroke: url(#gradient-1); animation-delay: 0" r="53.4"></circle>
            </g>
            <g>
               <circle class="orbit" style="stroke: url(#gradient-2); animation-delay: 0.03s" r="103.4"></circle>
               <circle class="gray satellite" style="animation-delay: 0.9s" cx="-69.6" cy="-76" r="5.8"></circle>
            </g>
            <g>
               <circle class="orbit" style="stroke: url(#gradient-3); animation-delay: 0.06s" r="160.4"></circle>
               <circle class="orange satellite" style="animation-delay: 0.8s" cx="102.4" cy="-123" r="5.8"></circle>
            </g>
            <g>
               <circle class="orbit" style="stroke: url(#gradient-4); animation-delay: 0.09s" r="267.3"></circle>
               <circle class="orange satellite" style="animation-delay: 0.6s" cx="-243.6" cy="111.4" r="5.8"></circle>
               <circle class="gray satellite" style="animation-delay: 1s" cx="250" cy="94.4" r="5.8"></circle>
               <circle class="orange satellite" style="animation-delay: 0.7s" cx="-236.6" cy="-123.6" r="5.8"></circle>
            </g>
            <g>
               <circle class="orbit" style="stroke: url(#gradient-5); animation-delay: 0.12s" r="388.5"></circle>
            </g>
         </g>
         <!-- <path id="vercel-logo" d="m336.4 261-46.2-80-46.2 80h92.4z" style="fill: url(#gradient-vercel)"></path> -->
         <!-- <img src="/readme/fiveam-white.png" alt="" /> -->
         <image x="250" y="200" width="100" xlink:href="/readme/fiveam-white.png" />
         <g id="center">
            <path
               d="M420 202 v36 M 402 220h36"
               style="
                  stroke-width: 3.5625;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke: #999;
                  fill: none;
               "></path>
         </g>
         <use href="#logo" width="98" x="500"></use>
         <use href="#logo" width="98" x="500" mask="url(#mask)"></use>
      </svg>
      <main>
         <div class="info">
            <div class="block">
               <div class="contents text-[1.4rem] text-green-500 normal-case">
                  <a href="https://github.com/fiveam-cc/Nuxt3-Template" target="_blank" class="normal-case"
                     >Github Repo</a
                  >
               </div>
            </div>

            <div class="block">
               <div class="contents text-[1.4rem]">
                  <a href="https://github.com/fiveam-cc/Nuxt3-Template" target="_blank" class="normal-case"
                     >5AM Website</a
                  >
               </div>
            </div>
         </div>
         <div
            class="absolute left-1/2 translate-x-[-50%] bottom-[25%] md:bottom-[auto] md:w-[calc(100vw-2*32px)] text-center">
            <div class="py-3 px-4 rounded-lg bg-slate-900 inline-flex">
               <code>
                  To get started, delete
                  <code class="text-orange-300">~/app/pages/index.vue</code>
               </code>
            </div>
         </div>
      </main>
      <div class="debug text-[1rem]">Last ISR revalidation: {{ generatedAt }}</div>
   </div>
</template>

<script setup lang="ts">
const generatedAt = useNuxtApp().$dayjs().format('dddd, HH:mm:ss')
</script>

<style scoped>
main {
   position: relative;
   width: 100vw;
   height: 100%;
   padding: 2.5rem;
   box-sizing: border-box;
}

main h1 {
   font-size: min(16vw, 4rem);
   font-weight: 600;
   margin: 0;
   text-align: center;
   position: absolute;
   top: 10vh;
   left: 0;
   width: 100%;
   padding: 0 2.5rem;
   box-sizing: border-box;
   line-height: 1;
}

main h1 span {
   display: block;
   max-width: 6em;
   margin: 0 auto;
}

main .info {
   --border-color: rgba(0, 0, 0, 0.08);
   position: absolute;
   bottom: 9rem;
   left: 0;
   width: 100%;
   display: grid;
   padding: 0 2.5rem;
   font-size: min(5vw, 2rem);
   box-sizing: border-box;
}

main .block {
   display: flex;
   margin: 0;
   padding: 1rem 0;
}

main .block:nth-child(1) {
   border-bottom: 1px solid var(--border-color);
}

main .block span {
   display: block;
   margin: 0 0 0.2em 0;
   font-size: 0.6em;
}

main .block strong {
   display: block;
   font-size: 1.4em;
   margin: 0;
   font-weight: 600;
}

main .block strong.na {
   color: #ccc;
   font-weight: normal;
}

.debug {
   position: absolute;
   bottom: 42px;
   text-align: center;
   width: 100%;
   color: #999;
}

@media (min-width: 640px) {
   main h1 {
      font-size: min(8vw, 4rem);
   }

   main h1 span {
      max-width: none;
   }

   main .info {
      display: flex;
      justify-content: center;
      position: relative;
      top: 60vh;
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
   }

   main .block:nth-child(1) {
      border-bottom: none;
      justify-content: end;
   }

   main .block:nth-child(2) {
      justify-content: start;
   }
}

@media (prefers-color-scheme: dark) {
   main .block:nth-child(1) {
      --border-color: rgba(255, 255, 255, 0.35);
   }
}

/* card */
@keyframes fade-in {
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
}

@keyframes grow {
   0% {
      opacity: 0;
      transform: scale(0.96);
   }

   3% {
      opacity: 0.7;
      transform: scale(1.03);
   }

   3.6% {
      opacity: 0.8;
      transform: scale(1.05);
   }

   4.2% {
      opacity: 0.9;
      transform: scale(1.03);
   }

   6% {
      opacity: 1;
      transform: scale(1);
   }

   95% {
      opacity: 1;
      transform: scale(1);
   }

   100% {
      opacity: 0;
      transform: scale(1);
   }
}

@keyframes spin {
   0% {
      transform: rotate(0deg);
   }

   100% {
      transform: rotate(-360deg);
   }
}

svg.card {
   position: absolute;
   width: 100%;
   height: 100%;
   overflow: visible;
}

.card .satellite {
   fill: var(--bg);
   stroke-width: 1.165;
   /* animation: fade-in 1s both; */
}

.card .orange.satellite {
   @apply stroke-green-900;
}

.card .gray.satellite {
   stroke: #999;
}

.card .orbit {
   fill: none;
   stroke-width: 1.165;
   animation: grow 5s linear both infinite;
}

.card .orbits > g {
   animation: spin 60s linear both infinite;
}

.card .orbits > g:nth-child(2) {
   animation-duration: 80s;
}

.card .orbits > g:nth-child(3) {
   animation-duration: 100s;
}

.card .orbits > g:nth-child(4) {
   animation-duration: 120s;
}

.card #gradient-vercel {
   --g1: #000;
   --g2: #333;
}

.card stop {
   stop-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: 800px) {
   .card .orbits > g:nth-child(2) {
      animation-duration: 120s;
   }

   .card .orbits > g:nth-child(3) {
      animation-duration: 150s;
   }

   .card .orbits > g:nth-child(4) {
      animation-duration: 180s;
   }
}

@media (prefers-color-scheme: dark) {
   .card #gradient-vercel {
      --g1: #eee;
      --g2: #fff;
   }

   .card stop {
      stop-color: white;
   }
}

@media (prefers-reduced-motion) {
   .card .satellite,
   .card .orbit,
   .card .orbits > g {
      animation: none;
   }
}

/* footer */

footer {
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   text-align: center;
   padding: 2.5rem;
   box-sizing: border-box;
   font-size: 16px;
}

footer p {
   margin: 0.5em 0;
}

footer a {
   text-decoration: none;
}

footer a:hover {
   text-decoration: hover;
}

footer .details {
   order: 3;
   grid-column: 1/3;
   white-space: nowrap;
}

footer .details a {
   color: var(--primary);
}

footer .source,
footer .company {
   display: flex;
   align-items: center;
}

footer .source {
   gap: 0.5rem;
   align-items: center;
   justify-content: flex-end;
}

footer .company {
   font-weight: 600;
   white-space: nowrap;
   justify-content: start;
}

footer .company svg {
   height: 1em;
   position: relative;
   top: 0.2em;
}

footer .source,
footer .company a {
   color: var(--fg);
}

@media (min-width: 800px) {
   footer {
      display: flex;
      justify-content: space-around;
   }

   footer .source,
   footer .company {
      width: 10em;
   }

   footer .details {
      order: 0;
      grid-column: 1/3;
   }
}
</style>
