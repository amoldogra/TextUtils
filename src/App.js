
import './App.css';
// import Alert from './components/Alert';
//  import About from './components/About';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

function App() {
  return (
     <>
      {/* <Router> */}
      <Navbar  title ="TextUtils" about="About Us"/>
      {/* <Alert alert="bfjd,nc"/> */}
      <div className='container my-3'>
      {/* <Switch>
          <Route exact path="/about">
            <About />                                       // navigate from about to home
          </Route>
          <Route exact path="/">
          
          </Route>
        </Switch> */}
        <TextForm heading="Enter the Text Analyze below"/>
      </div> 
      {/* </Router> */}
      
      
</>
  );
}

export default App;