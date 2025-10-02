import './header.scss'
import { HeaderButtons } from './headerButtons/headerButtons'
import Logo from '../../assets/LoremIpsumNet.svg'

export const Header = ()=>{
    return (<div className='header'>
       <div className="logo">
            <img src={Logo} alt="Logo" className="logo__image" />
       </div>
        <HeaderButtons/>
    </div>)
}