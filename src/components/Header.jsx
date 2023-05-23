import './Header.css';
import proptypes from 'prop-types';

// HOW TO USE PROPS

const Header = (props) =>{
    return(
        <header>
            <h1>{props.title}</h1>
            <nav>
                <a href="www.google.com">{props.nav}</a>
                <a href="www.google.com">About</a>
                <a href="www.google.com">Services</a>
                <a href="www.google.com">About us</a>
            </nav>
        </header>
    );
};


Header.propTypes = {
    title: proptypes.string,
    nav: proptypes.string
};
export default Header;
