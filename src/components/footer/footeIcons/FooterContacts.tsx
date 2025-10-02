import type { FooterIcon } from "../../../types"
import './FooterContacts.scss'

export const Seporator = () => <div className="seporator"></div>

export const FooterContact = ({icon, description, link, endIcon}: FooterIcon) => {
  return (
    <div className="footerContactLink">
      <img src={icon} alt={`icon_${icon}`}/>
      <a href={link}>
        <span>{description}</span>
      </a>
      {!endIcon && <Seporator/>}
    </div>
  )
}