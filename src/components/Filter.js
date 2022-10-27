import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParams, setSearchParam]= useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city'));
    let x= searchParams.get('age');
    let y= searchParams.get('city');

    const inputHandler=(e)=>{
        setSearchParam({text:e.target.value,age:78}
            
            )
        // setSearchParam({age:34})
    }

    return (
        <div>
            <h1>Filter Page</h1>
            <h2>My age is {x} and city {y}</h2>
            <button onClick={()=>setSearchParam({age:50})}>Set age in url</button>
            <input type="text" onChange={(e)=>inputHandler(e)}
            placeholder="set text "/>
            </div>
    )
     
}

export default Filter;
