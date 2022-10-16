import { Link } from "react-router-dom";

function Home(){
    return (<div>
        <h1>Home Page content</h1>
        <p>This is the home page awesome App</p>
        <p1>And here we are learning about router <br/>  </p1>
        <Link to="/about">Go to about page</Link>
    </div>
    )

}

export default Home;