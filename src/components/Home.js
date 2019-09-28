import React from 'react'
import './Home.css';
import data from './data.PNG';

const Home = () => (
  <div>

    <h1 id="h1">Let's Shatter the Stigma Together!</h1>

    <div className="image">
    <img className="image2" src={data} alt="data" />
    </div>

    <div className="quote">

   <p> “Stigma isolates people, discourages people from coming forward for treatment, and leads some clinicians, knowingly or unknowingly, to resist delivering evidence-based treatment services.”​ 
  </p>

      <p className="person">-Michael Botticelli Director White House Office of National Drug Control Policy</p>
</div>

  </div>
)

export default Home
