import { Link, useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const navToPage=() =>{
        let x = true
        
        if(x){
            navigate('/about')
        }
        else
            navigate('/filter')
    }
    return (<div>
        <h1>Home Page content</h1>
        <p>This is the home page awesome App</p>
        <p1>And here we are learning about router <br/>  </p1>
        <Link to="/about">Go to about page</Link>
        <br/>
        <button onClick={()=>navToPage()}>Go to About</button>
        <br/>
        <button onClick={()=>navToPage()}>Go to filter</button>
    </div>
    )

}

export default Home;