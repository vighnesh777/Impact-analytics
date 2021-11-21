import {React,useState,useEffect} from 'react';
import { Redirect } from '@version/react-router-v3';
 import './Userpage.css';

const Userpage =()=>
{
    const [name,setName]=useState("");
    
const [imgUrl,setUrl]=useState("");
const [id,setId]=useState("");

    function handle2(){
        
        var idd=window.location.pathname;
        var len=idd.length;
        idd=idd.substring(1,len);
        if(localStorage.ids===undefined)
        {
            if(localStorage.rejected===undefined)
            {
                localStorage.setItem("ids",idd);
            }
            else if(localStorage.rejected.includes(idd))
            {
                alert("User is already in the rejection tab");
            }
            
        }
        else if(!localStorage.ids.includes(idd))
        {
            if(localStorage.rejected!==undefined)
            {
                if(localStorage.rejected.includes(idd))
                {
                    alert("User is already in the rejection tab");
                }
                else{
                var a=localStorage.ids;
                a=a+","+idd;
                localStorage.setItem("ids",a);
                }
                
            }
            else{
                var b=localStorage.ids;
                b=b+","+idd;
                localStorage.setItem("ids",b);
            }
            
        }
        else
        {
            alert("Connaot shortlist the user again ");
        }
       
    }
    
    function handle1(){
        
        var idd=window.location.pathname;
        var len=idd.length;
        idd=idd.substring(1,len);
        if(localStorage.rejected===undefined)
        {
            if(localStorage.ids===undefined)
            {
                localStorage.setItem("rejected",idd);
                alert("User is Now Rejected,You will be redirected in 1 sec!");
                setTimeout(()=>{
                    return (<Redirect to = "/" />);
                },1000);
            }
            else if(localStorage.ids.includes(idd))
            {
                alert("User is already in the shortlisted tab");
            } 
            else
            {
                localStorage.setItem("rejected",idd);
                alert("User is Now Rejected,You will be redirected in 1 sec!");
                setTimeout(()=>{
                    return (<Redirect to = "/" />);
                },1000);
            }
        }
        else if(!localStorage.rejected.includes(idd))
        {
            if(localStorage.ids!==undefined)
            {
                if(localStorage.ids.includes(idd))
                {
                    alert("User is already in the shortlist tab");
                }
                else
                {
                    var b=localStorage.rejected;
                b=b+","+idd;
                localStorage.setItem("rejected",b);
                alert("User is Now Rejected,You will be redirected in 1 sec!");
                setTimeout(()=>{
                    return (<Redirect to = "/" />);
                },1000);

                }
            }
            
            else{
                var a=localStorage.rejected;
                a=a+","+idd;
                localStorage.setItem("rejected",a);
                alert("User is Now Rejected,You will be redirected in 1 sec!");
                setTimeout(()=>{
                   
                    return (<Redirect to = "/" />);
                },1000);
            }
            
        }
        else
        {
            alert("Connaot reject the user again ");
        }
    }
    useEffect(() => {
       fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
          .then((res) => res.json())
          .then((json) => {
            
            var id1=window.location.pathname;
            var len=id1.length;
             id1=id1.substring(1,len);
            
            setName(json.find(x => x.id === id1).name);
            setUrl(json.find(x => x.id === id1).Image);
            setId(json.find(x => x.id === id1).id);
            
          });
      }, []);
    
    
       
        return(
            <div className="container">
                
                    <div className="Image">
                        <img src={imgUrl} class="user-image"alt=" user"></img> 
                    </div>
                    <div className="User-Details">
                        <div>
                            <h3>User Id: {id}</h3>
                        </div>
                        <div>
                            <h3>User Name: {name}</h3>
                        </div>
                        <div className="buttons">
                            <div className="b11">
                                <button  className="b1" onClick={handle1} >Reject</button>
                            </div>
                            <div className="b22" >
                                <button className="b2"  onClick={handle2}>Shortlist</button>
                            </div>
                        </div>
                    
                    
                    
                </div>
           </div>
       )
      
    

}
export default Userpage;