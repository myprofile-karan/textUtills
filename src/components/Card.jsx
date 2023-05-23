import './Card.css';
import img1 from '../assets/img1.jpg';

const Card = (props) =>{
    return(
        // <div className='card'>
        //     <img src={img1} alt="" />
        // </div>
        <div className="card">
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
        </div>
    );
};

export default Card;