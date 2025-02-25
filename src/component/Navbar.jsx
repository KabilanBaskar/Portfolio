import { Link } from "react-router-dom";
import '../css/Navbar.css'
var Navbar = () => { 
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li className="home"><Link to = '/'>Home</Link></li>
                        <li><Link to = '/AboutMe'>About Me</Link></li>
                        <li><Link to = '/Education'>Education</Link></li>
                        <li><Link to = '/Skills'>Skills</Link></li>
                        <li className="Achieve"><Link to = '/Achievements'>Achievements</Link></li>
                        <li><Link to = '/Contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
            
        </>
    )
}
export default Navbar