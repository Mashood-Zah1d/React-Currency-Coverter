import React from 'react'

function InputFeild({
  label,
  amount,
  onAmountchange,
  selectedCurrency ='USD',
  onCurrencychange,
  amountdisable=false,
  CurrencyOptions=[]
}) {
  return (
    <div>
      <div className="flex items-center bg-white rounded-lg shadow-md p-4 w-full max-w-md">
  <div className="flex flex-col flex-1">
    <label className="text-gray-500 text-sm mb-1">{label}</label>
    <input 
      type="number" 
      placeholder='Amount'
      value={amount}
      onChange={(e)=> onAmountchange && onAmountchange(e.target.value)}
      className="border-none outline-none text-2xl w-full"
      disabled={amountdisable}
    />
  </div>

  <div className="flex flex-col items-end">
    <label className="text-gray-500 text-sm mb-1">Currency Type</label>
    <select className="border-none outline-none bg-gray-100 text-lg rounded px-2 py-1"
    value={selectedCurrency}
    onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
    >
      {CurrencyOptions.map((currency)=>(
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
</div>

    </div>
  )
}

export default InputFeild
