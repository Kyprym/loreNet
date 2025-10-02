import './basicInformation.scss'

export const BasicInformation = () =>{
    return (<>
        <div className="basicInformationContainer">
            <span className="upText">
                <span className="basicInformationTextBlueColor">LOREM IPSUM</span>
                <span className="basicInformationTextBlackColor basicInformationextSpace">DOLOR SIP</span>
            </span>
            <span className="downText">
                <span className="basicInformationTextBlackColor">AMETCONSECTETUR</span> 
                <span className="basicInformationTextBlueColor basicInformationextSpace">ADIPICING</span>
            </span>
            <div className='titleList'>
                <span className='listTitleText'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus!
                </span>
                <span className='listLiText'>
                    - Totam rem aperiam eaque ipsa
                </span>
                <span className='listLiText'>
                    - Sit voluptatem accusantium doloremque laudantium
                </span>
                <span className='listLiText'>
                    - Sed ut perspiciatis, unde omnis iste natus error
                </span>
            </div>

            <div className='basicInformationButtons'>
                <button className="button">ЗАКАЗАТЬ</button>
                <button className="button--outlined">ПОДРОБНЕЕ</button>
            </div>

        </div>
    </>)
} 