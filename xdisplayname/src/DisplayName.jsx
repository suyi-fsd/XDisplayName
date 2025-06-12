import { useState } from "react"
function DisplayName(){

    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [submit, setSubmit] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        setSubmit((prev)=>(!prev));
    }
    return(
        <>
        <h1>Full Name Display</h1>
         <form onSubmit={handleSubmit}> 
            <label style={{display:"block"}} >First Name:<input type="text" name="firstname" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} required /></label>
            <label style={{display:"block"}} >Last Name:<input type="text" name="lastname" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} required /></label>
            <button type="submit">Submit</button>
        </form>
        {submit?<p>Full Name: {firstname} {lastname}</p>:<></>}
        </>
    )
}

export default DisplayName;