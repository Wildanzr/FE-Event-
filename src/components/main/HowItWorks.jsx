import React from 'react'

import HowWorks from '../../images/web/howworks.png'

const HowItWorks = () => {
  return (
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className='text-4xl font-bold py-10'>How It Works</h1>
          <img src={HowWorks} />
      </div>
  )
}

export default HowItWorks
