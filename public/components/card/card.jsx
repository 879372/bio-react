import Buttons from '../buttons/buttons';
import Avatar from '../images/image';
import Text from '../text/tex';
import './card.css'

const Card = () =>{
    return (
        <div className="card">
            <Avatar />
            <Text />
            <Buttons />
        </div>
    );
};

export default Card;