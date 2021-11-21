import "./Home.css";
import React from 'react';
import {Link} from 'react-router-dom';
import Usercard from "../Usercard/Usercard";
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: [],
            loaded: false
        };
   
    }
    componentDidMount() {
        fetch(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({
                                users: json,
                                loaded:true
                                
                            });
                            
                        });
      }
    
    render(){
        return (
            <div className="section-container">
               <div class="heading">
                    <h1 style={{color:"black",fontSize:"40px",textDecoration:"dashed"}}>Users Fetched</h1>
                </div>
            <div className="button-nav">
                <div className="Shortlisted"><Link to="/shortlisted" className="Link1">Shortlisted</Link></div>
                <div className="Rejected"><Link to="/rejected"  className="Link2">Rejected</Link></div>
            </div>
    
                <div className="user-card-container">
                
                    {this.state.users.map((user) => {
                        return (
                            
                         <Link to={"/"+user.id }  > 
                            <Usercard imageurl={user.Image} 
                                name={user.name}
                                id={user.id}
                                 />
                            </Link> 
                        
                            
                        );
                    })} 
                </div>
    
    
            </div>
        );

    }
   
};

export default Home;