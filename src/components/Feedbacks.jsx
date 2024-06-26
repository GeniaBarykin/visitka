import {motion} from 'framer-motion'

import {styles} from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <MotionConfig.div variants={textVariant}>
          <p className={styles.sectionSubText}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText}>
            Testimonials
          </h2>

        </MotionConfig.div>
      </div>
    </div>
  )
}

export default Feedbacks