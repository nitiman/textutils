
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
   <Navbar title="TextUtils" aboutText="abouttextutils"/>
   {/* <Navbar/> */}
   <div className="container" >
   <TextForm heading ="enter the text here"/>
   {/* <About/> */}
   </div>
   </>
   
  );
}

export default App;
