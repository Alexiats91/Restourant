//Styles
import {CardsWrap, ContentWrap, FoodItemStyles, LinkArrow, LinkText, SeeMoreButton, SeeMoreWrap} from './styled';
import {MyContainer} from "../../GlobalStyle";

//Components
import FoodCard from "./FoodCard";
import Title from "./Title";
import {Link} from "react-router-dom";

const FoodItem = ({store}) => {
	const foodCards = store.map( (el, key) => {
		return <FoodCard key={key} img={el.image} title={el.title} description={el.description} location={el.location} link={el.link}/>
	} );
	return (
		<FoodItemStyles>
			<MyContainer>
				<Title/>
			</MyContainer>
			<ContentWrap>
				<CardsWrap>
					{foodCards}
				</CardsWrap>
				<SeeMoreWrap>
					<LinkArrow as={Link} to="/seeMore">
						<SeeMoreButton>
							<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.6785 11.7851L2.78516 21.6751C2.35105 22.1082 1.64772 22.1082 1.21251 21.6751C0.778399 21.2421 0.778399 20.5388 1.21251 20.1058L10.3211 11.0005L1.21361 1.89522C0.779495 1.4622 0.779495 0.758873 1.21361 0.324761C1.64772 -0.108254 2.35214 -0.108254 2.78625 0.324761L12.6796 10.2147C13.107 10.6432 13.107 11.3576 12.6785 11.7851Z" fill="white"/>
							</svg>
						</SeeMoreButton>
					</LinkArrow>
					<LinkText as={Link} to="/seeMore">See more</LinkText>
				</SeeMoreWrap>
			</ContentWrap>
		</FoodItemStyles>
	)
};

export default FoodItem;