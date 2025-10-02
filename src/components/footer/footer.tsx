import type { FooterIcon } from '../../types'
import { FooterContact } from './footeIcons/FooterContacts'
import './footer.scss'
import QiwiIcon from '../../../public/icons/qiwi.svg'
import YAmoneyIcon from '../../../public/icons/YAmoney.svg'
import WebMoneyIcon from '../../../public/icons/webMonew.svg'
import MailIcon from '../../../public/icons/mail.svg'
import VKicon from '../../../public/icons/VK.svg'

export const Footer = () =>{
    const contactsArr:FooterIcon[] = [
        {
            icon: QiwiIcon,
            description: 'Qiwi wallet',
            link: 'https://qiwi.com/',
            endIcon:false
        }
        ,
        {
            icon: YAmoneyIcon,
            description: 'Yandex Money',
            link: 'https://yoomoney.ru/',
            endIcon:false
        }
        ,{
            icon: WebMoneyIcon,
            description: 'Web Money',
            link: 'https://www.webmoney.ru/',
            endIcon:false
        },
        {
            icon: MailIcon,
            description: 'info@ipsum228.com',
            link: 'mailto:info@ipsum228.com',
            endIcon:true
        },
        {
            icon: VKicon,
            description: 'Мы вконтакте',
            link: 'https://vk.com/',
            endIcon:true
        },
    ]




    return (<>
        <div className="footer">
            <div className='footerLogo'>
                © 2018 «LoremIpsum.net» Все права защищены.
            </div>
            {contactsArr.map((contact, index)=>{

                const {icon, description, link, endIcon} = contact

                return <FooterContact
                    endIcon={endIcon}
                    key={`contact_${index}`}
                    icon={icon}
                    description={description}
                    link={link}
                
                />
            })}
        </div>
    </>)
}