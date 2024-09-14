import { PrincipalImg } from "../PrincipalImg/PrincipalImg"
import './DuckCard.css'

export const DuckCard = ({img, title, alt, description}) => {
    return (
        <>
            <div className="card">
                <div className="card__header">
                    <PrincipalImg imgSrc={img} altText={alt} />
                    <h2 className="card__title">{title}</h2>
                </div>
                <div className="card__body">
                    <p className="card__description">{description}</p>
                </div>
            </div>
            
        
        </>
    )
}