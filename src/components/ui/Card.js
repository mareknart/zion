import { StyledCard } from "./Card.styled"


const Card = (props) =>{

    return(
        <StyledCard>{props.children}</StyledCard>
    )
}

export default Card;