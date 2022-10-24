import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React,{useState} from 'react'
import Alert from "./components/Alert";


function App() {
  // let name="harsh"
  // let a=["harsh","sachin","vikas"]
  // const listitems=a.map((item)=>{
  //   <li>{item}</li>
  // })


  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)

    },1500

    )
  }

  const Redmode=()=>{
      if (mode==='light')
      {
        setmode('red')
        document.body.style.backgroundColor='red'
        showAlert("Red mode enable","success")
      }
      else
      {
        setmode('light')
        document.body.style.color='white'
        showAlert("Light Mode Enabled","success")

      }
  }


  const togglemode=()=>{
    if (mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
    <Navbar togglemode={togglemode}  mode={mode} Redmode={Redmode}/>
    <Alert  alert={alert}/>
    <div className="container">
      <TextForm heading="Enter text to analyze below" mode={mode} Redmode={Redmode} togglemode={togglemode}/>
    </div>
    {/* <About/> */}
    </>
       );
}

export default App;
