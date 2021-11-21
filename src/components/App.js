import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from '../components/Home/Home';
import Rejected from './Rejected/Rejected';
import Shortlisted from './Shortlisted/Shortlisted';
import Userpage from './Userpage/Userpage';

class App extends React.Component
{
    
    render(){
        return(
            
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/rejected" element={<Rejected/>} exact/>
                <Route path="/shortlisted" element={<Shortlisted/>} exact/>
                <Route path="/:id" element={<Userpage/>}  exact/>
            </Routes>
            </BrowserRouter>
            
);
}     
}

export default App;