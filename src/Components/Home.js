import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="homeStyle">
           <header>
             <h1>header</h1>
          </header>
      <main>
        <h3>Welcome to Sleep Debt Calculator</h3>
        <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Non doloremque iure id porro
          omnis minus ab in, numquam dolor esse eum amet
          pariatur aspernatur voluptatem nostrum ducimus.
          Consectetur, voluptas non commodi dignissimos ipsa
          reprehenderit esse. Incidunt adipisci culpa velit
          amet error vel, quidem consectetur ducimus ab dolorem,
          nostrum blanditiis? Blanditiis.<button><Link to="/debt">Start</Link></button></p>
      </main>
      <footer><p>copyright &copy; 2021</p></footer>
        </div>
    )
}

export default Home
