import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import Tech from './Tech';
import { SectionWrapper } from '../hoc';
import { StarsCanvas } from './canvas'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{max: 45,
          scale: 1,
          speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have a passion for delving deep into data and meticulously cleaning it to the last grain of dust. My true thrill comes from analyzing data thoroughly to extract the most insightful information that drives informed decision-making. What sets me apart is my dedication to presenting these valuable insights in the most comprehensible and attractive way. Data visualization is where I channel my creativity - from selecting the right colors and sizes to ensuring clarity and engagement.

      </motion.p>
      <span className="hash-span">
                &nbsp;
      </span>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}><Tech /></div>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")