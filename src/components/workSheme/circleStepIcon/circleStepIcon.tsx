import type { StepsIconProps } from '../../../types'
import './circleStepIcon.scss'
import { Dots } from './stepPoints/dots'

export const CircleStepIcon = ({icon, dots}: StepsIconProps) => {
    return (
        <div className='stepBox'>
            <div className="circleStepIcon">
            <div className='circleIconAndSteps'>
                <div className="circleStepIcon__circle">
                    <img src={icon} alt={icon} className="circleStepIcon__icon" />
                </div>
                {dots ? <Dots key={`dots_${icon}`}/>:<></>}
            </div>
        </div>
        </div>
    )
}