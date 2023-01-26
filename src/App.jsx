import React, { useState } from 'react'

import './index.css'
import BgSwiper from './components/BG/BG'
import MainSwiper from './components/Main/Main'

function App() {

  const [controlledSwiper, setControlledSwiper] = useState(undefined);
  
  return (
    <div>
      <div className='wrap-container'>
        <MainSwiper controlledSwiper={controlledSwiper} />
        <BgSwiper setControlledSwiper={setControlledSwiper} />
      </div>
    </div>
  );
}

export default App;
