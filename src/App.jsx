
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
 




// function App (){

// let number ="100"

// let person ={
//   name:"Zaid", contact:"0129"
// }

//     return (
//       <div className="navigation">
//        <h1> Welcome {person.name} {person.contact} </h1>
//       </div>
//     )
// }

// export default App



//---------------------------------- Day 5  DATE - 14/04/2025----------------


// import Nav  from './Navbar.jsx'

// import {Content, Maincontent} from './Content.jsx'

// import Footer from './Footer.jsx'


// let App = () => {


//   return(

//     <>  
    
//     <Nav/>
    
//     <Content/>

//     <Maincontent/>

//     <Footer/>
    
    
//     </>


//   )
// }


// export default App




// ---------------------------HOMEWORK 14/04/2025-------------------



import Home from './Home.jsx';

import {Hero, Hero2} from './Hero.jsx'

import About from './About.jsx'

import Contact from './Contact.jsx'

import {Foot, Foot2} from './Foot.jsx'



let App =()=>{
  


  return (

<>

<Home/>
<Hero/>
<Hero2/>
<About/>
<Contact/>
<Foot/>
<Foot2/>



</>

  )
}

export default App