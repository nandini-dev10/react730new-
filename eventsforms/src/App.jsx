import { useState } from "react";

function App ()
{
  const [top, setTop] = useState('60%')
   const [left, setLeft] = useState('60%')
  const buttonStyles = {
    position:"absolute",
    top: top,
    left: left,
     transition:"all 1s ease"
  }
  function changeButtonPosition ()
  {
    setTop(`${Math.round(Math.random()*100)}%`)
     setLeft(`${Math.round(Math.random()*100)}%`)
  }
  return (
		<div>
			<header className=' bg-gray-400 text-white text-5xl text-center py-3'>
				<h1>React events and Forms</h1>
			</header>
			<div className=' h-screen flex flex-col justify-center items-center'>
				<h2 className=" text-green-800 text-7xl ">Do you Like My Classes?</h2>
				<div className=" flex gap-3 m-4">
          <button className="bg-black rounded-2xl text-2xl p-3 text-white">YES</button>
					<button style={buttonStyles} onMouseOver={changeButtonPosition} className="bg-black rounded-2xl text-2xl p-3 text-white">NO</button>
				</div>
			</div>
		</div>
	)
}

export default App
