import './Head.css';
import logo from './Vector.png'

function Head() {
    return (
        <div className="nav">
            <div className='logo'>
                <img src={logo} alt='logo'></img>
            </div>
                <div className="navCenter">
                    <a href=''>Home</a>
                    <a href=''>About</a>
                    <a href=''>Contact Us</a>
                </div>
            <div className='login'>
                <a>login</a>
            </div>        
        </div>
    );
}

export default Head;