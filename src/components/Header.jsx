import './Header.css';
import proptypes from 'prop-types';

// HOW TO USE PROPS

const Header = (props) =>{
    return(
        <header className={`bg-${props.mode}`}>
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.title}</h2>
            <div className={`text-${props.mode==='light'?'dark':'light'}`}>
                <label htmlFor="checkbox" className='me-2'> Enable dark mode</label>
                <input type="checkbox" onClick={props.toggleMode} className='me-5'/>
            </div>
        </header>
    );
};


Header.propTypes = {
    title: proptypes.string,
    nav: proptypes.string
};
export default Header;
