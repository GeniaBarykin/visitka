import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'


const ServiceCard = (props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right, spring", 0.5*props.index, 0.75)}
        className="w-full green-pink-gradient
        p-[1px] rounded-[20px] shadow-card"
        >
          <div 
            options={{
              max:45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] 
            min-h-[280px] py-5 px-12 flex 
            justify-evenly items-center flex-col">
              <img src={props.icon} alt={props.title}
              className="w-16 h-16 object-contain"></img>
            <h3 className="text-white text-[20px] font-bold text-center">
              {props.title}
            </h3>
          </div>

        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Обзор
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1,1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]">
          Я разработчик ПО с высшим образованием (бакалавр)б полученным в Голландии. 
          Я обладаю широким профилем знаний как веб разработки (Node.js, Express, 
          React, MongoDB, SQL) так и в других областях (Python, Java, AndroidJava, MachineLearning),
          но сейчас в основном я занимаюсь веб разработкой.
          Имея за плечами 2х летний опыт работы по методике Agile зарубежом, я зарекомендовал себя как исполнительный
          разработчик, готовый решать любые проблемы. Мне не хватает прикладного опыта в веб разработке,
          но я ищу компанию, в которой мое усердие позволит мне вырасти в данном направлении.  
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) =>(
            <ServiceCard key={service.title} index={index}
            {...service}/>
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")