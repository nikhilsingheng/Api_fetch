import React,{useEffect,useState} from "react"

function Dataapi(){
    const [data,setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            result.json().then((resp)=>{
                // console.log('result', resp)
                setData(resp)
            })
        })
    
    }, [])
    console.log(data);
    return(
        <div>
            <table border="4">
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>username</td>
                    <td>email</td>
                    
                </tr>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    
                </tr> 
                    )
                }
            </table>
        </div>
    )
}
export default Dataapi