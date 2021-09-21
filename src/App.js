import React,{useState,useEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Error from './Error';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])
  return (
    <>
    {/* <div className="App"> */}
      {
        loading ?( 
        <div id="loading"></div>
        )
        :(
           
          <div className="after-Loading"> 
            {/* <div className="App">
              <Navbar/>
            </div> */}

            <Switch>
                <Route exact path ="/"><div className="App"><Navbar/> </div><Home/> </Route>
                <Route component={Error} />
                <Redirect to="/" />
            </Switch>
          </div>
          )
      }
      
    {/* </div> */}
      
    </>
  );
}

export default App;
