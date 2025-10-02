import type { HeaderButtonProps } from "../../../types"
import { HeaderButton } from "./headerButton/headerButton"
import './headerButtons.scss'

export const HeaderButtons = () =>{
    
    const buttonsArr:HeaderButtonProps[] = [
        {text:'БИЗЕС', link:'',activeState:true},
        {text:'О НАС', link:'',activeState:false},
        {text:'ЦЕНЫ', link:'',activeState:false},
        {text:'ОФОРМИТЬ ЗАКАЗ', link:'',activeState:false},
    ]

    
    return (<div className="headerButtons">
        {buttonsArr.map((button, index)=>{
            const {text, link, activeState} = button

            return <HeaderButton
                    key={`button_${index}`}
                    text={text}
                    link={link}
                    activeState={activeState}
            />
        })}
    </div>)
}