import type { HeaderButtonProps } from '../../../../types'
import './headerButton.scss'




export const HeaderButton = ({text, activeState}:HeaderButtonProps) =>{
    return (<div className={`headerButton ${activeState ? 'headerButton--active' : ''}`}>
            {text}
    </div>)
}