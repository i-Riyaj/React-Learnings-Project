import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(7);
  const [password, setPassword] = useState('');
  const [numApplied, setNumApplied] = useState(false);
  const [charApplied, setCharApplied] = useState(false);

  const changePassword = useCallback(()=>{
    let createdPassword = '';
    let passRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numApplied === true) passRange += "0123456789";

    if(charApplied === true) passRange += "~!@#$%^&*()_+[]{}";

    for(let i = 1; i <= length; i++){
      let index = Math.floor(Math.random()*passRange.length);
      createdPassword += passRange[index];
    }
    setPassword(createdPassword);
    
  }, [length, numApplied, charApplied, setPassword])

  const callChangePassword = useEffect(()=>{
    changePassword();
  }, [length, numApplied, charApplied, changePassword])

  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }, [password])

  return (
   <div className="max-w-dvw min-h-dvh bg-slate-600 text-xl flex flex-col items-center justify-center">

    <div className="bg-slate-700 rounded-lg shadow max-w-[80%] flex flex-col gap-5 p-5">

      <section>
        <h1 className="text-white font-bold text-center">Password Generator</h1>
      </section>

      <section className="flex justify-center">
        <input type="text"
        readOnly
        value={password}
        placeholder="password will appear here" 
        ref={passwordRef}
        className="p-2 rounded-l-lg bg-white text-orange-600 min-w-[60%] "/>
        <button 
        onClick={copyPassword}
        className="bg-blue-600 rounded-r-lg p-2">Copy</button>
      </section>

      <section className="sm:flex gap-4 justify-between">
        
        <section className="text-orange-600">
          <input type="range"
          min={1} max={20}
          onChange={(e)=>setLength(e.target.value)}
          value={length} 
          id="length"
          
          className="cursor-pointer"/>
          <label htmlFor="length">Length: {length}</label>
        </section>

        <section className="text-orange-600">
          <input type="checkbox" 
          id="num" 
          defaultChecked={numApplied}
          onChange={()=>setNumApplied((prev)=>!prev)}
          className=" cursor-pointer"/>
          <label htmlFor="num" className="cursor-pointer">Add Numbers</label>
        </section>

        <section className="text-orange-600">
          <input type="checkbox" 
          id="char"
          defaultChecked={charApplied}
          onChange={()=>setCharApplied((prev)=>!prev)} 
          className=" cursor-pointer"/>
          <label htmlFor="char" className="cursor-pointer">Add Charecters</label>
        </section>

      </section>

    </div>


   </div>
  )
}

export default App
