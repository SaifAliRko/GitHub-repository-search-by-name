import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [repos, setRepos] = useState([]);

  useEffect( async() => {
    const result = await axios("https://api.github.com/users/SaifAliRko/repos");
  
    const here = result.data.map((i) => {
      return i.name;
    });
    setRepos(repos.concat(here));
    
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        <header>
          <Navbar hereIt={repos}  />
        </header>      
      </div>
    </React.Fragment>
  );
}

export default App;
