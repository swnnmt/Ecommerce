import '../login.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import imgLogin from"../assest/img/77.jpg";
import { Link } from 'react-router-dom';
const SignIn = () => {
    return ( <div >
            <img className='aaa' src={imgLogin} alt='img'/>
        <section className="home">
            <div className="content">
                <Link to={"/"} className="logo"> <i className="fa-solid fa-paper-plane"></i> SMT</Link>
                <h2> Welcome!</h2>
                <h3> IVY moda </h3>
               <pre> Thank you for coming to us! </pre>
               <div className="icon">
                <i> <FaFacebook/></i>
                <i> <FaInstagram/></i>
                <i> <FaSquareXTwitter/></i>
                <i> <FaGithub/> </i>
               </div>    
            </div>
            <div className="login">
                <h2> Login </h2>
            <form>
                <div className="input">
                    <input type="text" className="input1" id="email" placeholder="Email" required/>
                   
                   <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="input">
                    <input type="password" className="input1" id="password" placeholder="Password" required/>
                    <i className="fa-solid fa-lock"></i> 
                </div>
                <div className="check">
                    <label> <input type="checkbox"/>Remember me </label>
                    <Link to={"/"}> Forgot Password?</Link>
                </div>
                <div className="button">
                    <button className="btn"> Login </button>
                </div>
            </form>
                <div className="sign-up">
                    <p> Don't have an account? </p>
                    <Link to={"/signup"}>Sign up</Link>
                </div>
            </div>
        </section>
    </div> );
}
 
export default SignIn;