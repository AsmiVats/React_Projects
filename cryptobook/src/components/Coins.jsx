import React from 'react'

function Coins({
  id,
  name,
  symbol,
  image,
  current_price,
  darkMode

}) {
  return (
    <div key={id} className={` flex items-center justify-center space-x-9 ${darkMode ? 'bg-gray-800' : 'bg-white'} w-1/2 p-6 my-4 mx-auto rounded-md shadow-md`}>
            <img
        src={image}
        alt={`${name} logo`}
        className="w-10 h-10 rounded-full mb-2"
      />
              <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{name}</h2>
              <p className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{symbol}</p>
              <p className={`text-green-500 ${darkMode ? 'text-green-300' : 'text-green-500'}`}>Price: {current_price} INR </p>
      </div>
  )
}

export default Coins