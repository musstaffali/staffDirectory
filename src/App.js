import React, { useState, useEffect } from 'react';
import Main from './components/layout/Main';
import FellowContext from './components/FellowContext';
import FellowProfile from './components/FellowProfile';
import API from './components/utils/API';
import Locate from './components/Locate';
import './App.css';

function App() {
  const [apiCall, setApiCall] = useState([]);
  const [locate, setLocate] = useState("");

  useEffect(() => {
    API.getUsers().then((response) => {
      setApiCall(response.data.results)
    })
  }, [locate])

  const handleInputChange = event => {
    event.preventDefault();
    const input = event.target.value;
    console.log(input)
    const staffs = apiCall.filter(staff => {
      // Returns call staff.name.first;
       return staff.name.first.indexOf(input) > -1 || 
       staff.name.last.indexOf(input) > -1
    })
    setApiCall(staffs);
  
    console.log(staffs)
  }
  
  return (  
    <div className="App">
      <div className="container">
      <Main />
      <Locate name="Locate" onChange={handleInputChange} results={apiCall}/> 
      <FellowContext.Provider value = {{users: apiCall}}>
      <FellowProfile />
      </FellowContext.Provider>
    </div>
    </div>
        
  );
}


export default App;
