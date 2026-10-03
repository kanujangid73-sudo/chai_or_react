// // import { useState ,useCallback} from 'react'



// // function App() {
// //   const [length, setLength] = useState(8)
// //   const [numberAllowed, setNumberAllowed] = useState(false)
// //   const [charAllowed, setCharAllowed] = useState(false)
// //   const [password,setPassword] = useState("")



// //   const passwordGenerator = useCallback(()=>
// //     {
// //       let pass = ""
// //       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// //       if(numberAllowed) {
// //         str += "0123456789"
// //       }
// //       if(charAllowed) {
// //         str += "!@#$%^&*()-+"
// //       }

// //       for(let i=0; i<length; i++) {
// //         let char = Math.floor(Math.random() * str.length)
// //         pass += str.charAt(char)
// //       }
// //       setPassword(pass)
// //     },[length,numberAllowed,charAllowed])
// //   return (
// //     <> 
// //     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
// //       <h1 className='text-white text-center'>Password Generator</h1>
// //   <div className="className='flex shadow rounded-lg overflow-hidden mb-4'">
// //     <input
// //       type="text"
// //       value={password}
// //       className='outline-none w-full py-1 px-3'
// //       placeholder='password'
// //       readOnly

// //     />
// //   </div>
// // </div>
     
// //     </>
// //   )
// // }

// // export default App



// import { useState ,useCallback} from 'react'



// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password,setPassword] = useState("")



//   const passwordGenerator = useCallback(()=>
//     {
//       let pass = ""
//       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//       if(numberAllowed) {
//         str += "0123456789"
//       }
//       if(charAllowed) {
//         str += "!@#$%^&*()-+"
//       }

//       for(let i=0; i<length; i++) {
//         let char = Math.floor(Math.random() * str.length)
//         pass += str.charAt(char)
//       }
//       setPassword(pass)
//     },[length,numberAllowed,charAllowed])
//   return (
//     <> 
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
//       <h1 className='text-white text-center'>Password Generator</h1>
//   <div className="className='flex shadow rounded-lg overflow-hidden mb-4'">
//     <input
//       type="text"
//       value={password}
//       className='outline-none w-full py-1 px-3'
//       placeholder='password'
//       readOnly

//     />
//     <button className>Copy</button>
//   </div>
// </div>
     
//     </>
//   )
// }

// export default App



import { useState, useCallback, useEffect, useRef } from 'react';

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook to reference the input element for copying
  const passwordRef = useRef(null);

  // Optimized password generation function using useCallback
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Add numbers if checkbox is selected
    if (numberAllowed) str += '0123456789';

    // Add special characters if checkbox is selected
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    // Generate random characters based on specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Copy password function using useRef
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Automatically recalculate password when length, numberAllowed, or charAllowed change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-lg font-semibold">
        Password generator
      </h1>
      
      {/* Password display & Copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-orange-500 font-semibold"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-colors"
        >
          copy
        </button>
      </div>

      {/* Controls for Length, Numbers, and Characters */}
      <div className="flex text-sm gap-x-2 items-center">
        {/* Length Slider */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Special Characters Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}