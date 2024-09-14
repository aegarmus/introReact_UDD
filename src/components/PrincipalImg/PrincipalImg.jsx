
import './PrincipalImg.css'

export const PrincipalImg = ({imgSrc, altText}) => {
    return (
        <>
            <img src={imgSrc} alt={altText} />
        </>
    )
}