

import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'



const pricingPromise=fetch('pricingData.json').then(res=>res.json());

function App() {
  

  return (
    <>
      
    <header>
      <Navbar></Navbar>
       {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <ResultsChart>
        
      </ResultsChart>

    </main>
    <footer>

    </footer>
     
    </>
  )
}

export default App
