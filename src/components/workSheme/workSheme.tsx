import type { StepsIconProps } from '../../types'
import { CircleStepIcon } from './circleStepIcon/circleStepIcon'
import './workSheme.scss'
import SearchIcon from '../../../public/icons/search.svg'
import PrecentIcon from '../../../public/icons/percent.svg'
import FileIcon from '../../../public/icons/file.svg'
import MessageIcon from '../../../public/icons/message.svg'
import MoneyIcon from '../../../public/icons/money.svg'
import { InputsContainer } from './inputs/inputsContainer'


export const WorkSheme = () =>{

    const iconStepsArr:StepsIconProps[] = [
    {
        icon: SearchIcon,
        descriptionText: 'Lorem ipsum dolor sit amet',
        dots: true,
    },
    {
        icon: PrecentIcon,
        descriptionText: 'Conseceturadipiscing elit',
        dots: true,
    },
    {
        icon: FileIcon,
        descriptionText: 'Sed do eiusmod tempor',
        dots: true,
    },
    {
        icon: MessageIcon,
        descriptionText: 'Esse cillum dolore eu fugiat',
        dots: true,
    },
    {
        icon: MoneyIcon,
        descriptionText: 'Excepteur sint occaecat cupidatat non poident',
        dots: false,
    },

]


    return <div className='workSheme'>
        <div className="workShemeText">
        <span className="workShemeWhiteColorText">ОФОРМЛЕНИЕ</span>
        <span className="workShemeBluekColorText">ЗАКАЗА</span>
    </div>
    <span className='downWorkShemeTextStyle'>
        <div className='downWorkShemeText'>Перед заполнением формы ознакомьтесь с нашей схемой работы!</div>
    </span>
    

    
    <div className='shemeAndDescription'>
    <div className='workStepsSheme'>
    {iconStepsArr.map((step, index)=>{
        const {icon, dots, descriptionText} = step
        
        return<div>
            <CircleStepIcon
            key={`stepsIcon${index}`}
            icon={icon}
            dots={dots}
        />
            <span className='description'>{descriptionText}</span>
        </div>
    })}
    </div>
   
    </div>
    
    <InputsContainer/>
    </div>
}