import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "./Loader";
import { OrbitControls, Stage} from "@react-three/drei";

import { styles } from '../styles';
import { Model } from './FinDraco';
import background from '../assets/herobg.png';

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto mb-[0rem] sm:mb[0rem] lg:mb-[11rem] h-[55rem]"
             style={{backgroundImage: `url(${background})`,
             backgroundSize: '100% auto',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center center'
           }}>

      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">

          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>

        <div>

          <h3 className={`${styles.heroHeadText} text-white lg:text-[30px] md:text-[30px] sm:text-[30px]`}>
            Hi, <span className="text-[#915eff]">I'm</span>
          </h3>

          <p className={`${styles.heroSubText} mt-2 text-white-50`}>
          a junior data analyst who pays attention to every detail and places significant emphasis on visualization. Utilizing mainly Python and Tableau, while also employing SQL and Excel.
          </p>
        </div>

      </div>

      
        <Canvas
          className="absolute bottom-[7rem] mb-[5rem]"
          frameloop='always'
          shadows
          dpr={[1, 2]}
          camera={{ position: [1, 0, 23], fov: 35, zoom: 0.8, near: 0.9, far: 1000 }}
          gl={{ preserveDrawingBuffer: true }}
        > 
          
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            
            <Stage environment="city" intensity={1}>
              <Model />
            </Stage>
            
          </Suspense>
        </Canvas>
  
      <div className='absolute xs:bottom-10 bottom-32 bottom-0.1 w-full hidden xl:flex lg:flex justify-end items-center md:hidden sm:hidden  pr-[6%]'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero