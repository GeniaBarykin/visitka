// import { motion } from 'framer-motion'
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
            Hi, I am <span className="text-[#915eff]">Evgeny</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop fullstack web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero