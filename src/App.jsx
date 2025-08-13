import useCurrencyInfo from './hooks/useCurrencyinfo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputFeild from './component/InputFeild'
import './App.css'
import { useState } from 'react'

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("pkr");
  const [convertedAmount,setConvertedAmount] = useState(0);
  const currencyinfo = useCurrencyInfo(from);
  const options=Object.keys(currencyinfo);

  const convert = ()=> {
    setConvertedAmount(amount*currencyinfo[to]);
  }
  return (
    <>
      <div className="bg-white/80 backdrop-blur-md w-full max-w-md rounded-2xl border-black border-2 shadow-2xl p-8">
       <h1 className="text-xl font-extrabold text-black text-center mb-8">
       Currency Converter
       </h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }} className="space-y-6">
          
          <div className="border-2 border-gray-300 rounded-xl p-4 shadow-sm bg-white">
            <InputFeild
              label="From"
              amount={amount}
              onAmountchange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              onCurrencychange={(currency) => setFrom(currency)}
              CurrencyOptions={options}
            />
          </div>

          <div className="border-2 border-gray-300 rounded-xl p-4 shadow-sm bg-white">
            <InputFeild
              label="To"
              amount={convertedAmount}
              selectedCurrency={to}
              onCurrencychange={(currency) => setTo(currency)}
              CurrencyOptions={options}
              amountdisable={true}
            />
          </div>

          <button
  type="submit"
  className="w-55 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
>
  Convert
</button>

        </form>
      </div>

    </>
  )
}

export default App
