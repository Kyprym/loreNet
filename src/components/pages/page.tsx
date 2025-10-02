import { Header } from "../header/header"
import Image from '../../../public/pageImage.webp'
import './page.scss'
import { BasicInformation } from "../basicInformation/basicInformation"
import { WorkSheme } from "../workSheme/workSheme"
import { Footer } from "../footer/footer"

export const Page = () =>{
    return (<>
        <Header/>

        
        
        <img 
            className="headerImage"
            src={Image} 
            alt="imgPoster" 
            loading="lazy"
            onError={(e) => {
            e.currentTarget.src = Image;
        }}
        />

        <BasicInformation/>
        <WorkSheme/>   
        <Footer/>
    </>)
}