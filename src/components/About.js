import { Link } from "react-router-dom";
function About(){
    return <div>
        <h1>About Page</h1>
        <p>This is the about page awesome App</p>
        <p1>And here we are learning about router <br/>  </p1>
        <Link to="/">Go to Home</Link>
        <li><Link to="/user/Anil">Anil's</Link></li>
        <li><Link to="/user/Peter">Peter's</Link></li>


    </div>

}

export default About;