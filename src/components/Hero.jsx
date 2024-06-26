 import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
// import { ComputerCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
       max-w-7x1 mx-auto flex flrx-row items-start gap-5`}>
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>  
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Привет, меня зовут <span className="text-[#915eff]">Евгений</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Я разработчик веб приложений.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary flex
          justyfy-center items-start p-2">
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1">
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero