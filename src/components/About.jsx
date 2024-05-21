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
          Представление
        </p>
        <h2 className={styles.sectionHeadText}>
          Обзор
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1,1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]">
          Специалист широкого профиля со знаниями начиная от того, как создать вебсайт, 
          до развертывания сложных приложений на облачных сервисах. Имею практику работы 
          с большими данными и созданием обучающихся моделей. Хорошо работаю в команде 
          используя jira и git, знаю docker и работал с kubernetes создавая мониторинговую систему для кластера.
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