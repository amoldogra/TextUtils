
import './App.css';
// import Alert from './components/Alert';
 import About from './components/About';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar  title ="TextUtils" about="About Us"/>
      {/* <Alert alert="bfjd,nc"/> */}
      <div className='container my-3'>
      <TextForm heading="Enter the Text Analyze below"/>
      </div> 
      <About/> 
</>
  );
}

export default App;