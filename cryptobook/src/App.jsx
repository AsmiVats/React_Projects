import { useState } from 'react'
import './App.css'
import Coins from './components/Coins'
import { useEffect } from 'react'
import searchIcon from './search.svg'


function App() {


  const [data, setData] = useState([]);
  const [search,setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false);



  useEffect(() => {


    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((res) => res.json())
    .then((res) => setData(res))
    .catch((error) => console.error("Error fetching data:", error));
  }, [])


  const handleChange=(e)=>{
     setSearch(e.target.value)
  }
  
  const filteredData = data.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });


  const toogleTheme=()=>{
    setDarkMode(!darkMode);
  }
  
 

  return (
    <div className={darkMode? 'bg-slate-950' : "bg-slate-200"}>

    <div className='flex justify-center items-center flex-col'>
    <h1 className={`text-center text-4xl ${darkMode ? 'text-white' : 'text-cyan-900'} py-10 border-b-10 font-bold`}>Crypto Currency</h1>
      
    <button
          className={`${darkMode ? 'text-white border-gray-600' : 'text-gray-800 border-blue-200'} items-center text-base font-semibold border p-2 rounded-md py-5`}
          onClick={toogleTheme}
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      
      <form action="" className='flex justify-center '>
        <input 
        type="text" 
        className={`border p-2 my-4 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 ${
              darkMode ? 'text-white bg-gray-800' : 'text-black bg-white'
            }`}
        placeholder="Search" 
        onChange={handleChange}

        />
        <img src={searchIcon} alt="Search Icon" className="w-8 ml-2 my-4 " />

      </form>

    </div>
    {filteredData.map(coin=>{
      return(
        <Coins
        id={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol}
        price={coin.current_price}
        darkMode={darkMode} 
        />
      );
    })}


  </div>
  )
}

export default App
