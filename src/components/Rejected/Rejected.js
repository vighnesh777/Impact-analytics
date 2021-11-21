import React from 'react';
import Usercard from '../Usercard/Usercard';
import './Rejected.css';
class Rejected extends React.Component
{
  
    constructor(props) {
        super(props);
    
        this.state = {
            users: [],
            loaded: false,
            ids:[]
        };
   
    }
    componentDidMount() {
        var rejectedUsers="";
        var array=[];
                        if(localStorage.length>0)
                            {
                            if(localStorage.rejected!==undefined)
                                {
                                rejectedUsers=localStorage.rejected;
                                }
                            }
                            if(rejectedUsers.length>0)
                            {
                                array=rejectedUsers.split(",");
                            }
                           
        fetch(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
                        .then((res) => res.json())
                        .then((json) => {
                        
                            this.setState({
                                users: json,
                                loaded:true,
                                ids:array
                            });
                            
                        });
      }
     
        render(){
            if(this.state.ids.length===0)
            {
                return(
                    <div class="heading">
                    <h1 style={{color:"black",fontSize:"40px",textDecoration:"dashed"}}>The Rejected List is Empty</h1>
                </div>
                )
            }
            return(
                <div className="section-container">

<div class="heading">
                    <h1 style={{color:"black",fontSize:"40px",textDecoration:"dashed"}}>Rejected LiSt</h1>
                </div>
                <div className="user-card-container">
                    
                                
                    {this.state.ids.map((id)=>{
                        return(
                            this.state.users.map((user)=>{
                                if(id===user.id)
                                {
                                    return(
                                        <Usercard imageurl={user.Image} 
                                    name={user.name}
                                    id={user.id}
                                     />
                                    )
                                }
                            })
                        )
                        
                    })}
                </div>

                </div>
                
                
            )
        }

}
export default Rejected;