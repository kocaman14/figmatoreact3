

function App() {


  return (
    <>
<div className="flex flex-row h-screen  ">
  <div className="w-[40%] bg-[rgb(26,235,183)]"></div>
  <div className="absolute h-auto w-[80%] max-w-[1250px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  justify-between items-center shadow-[0px_0px_20px_0px_rgba(176,170,170,1)]  rounded-lg bg-[rgb(255,255,255,0.1)]">

  
  <div className="w-[40%] flex justify-center items-center">
  <img  src="./images/image 1 (1).png" className="w-full h-auto max-w-[500px] max-h-[500px] "></img>
  </div>



  <div className="w-[70%] h-auto max-h-[590px]  flex flex-col justify-center items-center  overflow-hidden">

    <div className="w-full h-auto max-w-[181px] max-h-[56px] ">
<h1 className=" font-montserrat text-[50px] font-bold leading-[60.95px] text-left underline-offset-[from-font] decoration-skip-ink-none text-[rgba(0,0,0,0.7)]">LOGIN</h1>
    </div>

<div className="mt-5 ">
<input placeholder="Username" className=" sm:w-[442px] h-[58px] border border-gray-300"></input>
</div>

<div className="mt-5">
<input placeholder="Password" className=" sm:w-[442px] h-[58px] border border-gray-300"></input>
</div>

<div className="flex justify-between items-center mt-5 ">

<div className="w-full">
 <button className=" sm:w-[233.27px] h-[60.74px]  gap-0  bg-[rgba(26,235,183,1)] border-[1px] border-[rgba(0,0,0,0.7)]"><p className="font-montserrat text-[25px] font-bold leading-[30.48px]  underline-offset-[from-font] decoration-skip-ink-none text-[rgba(255,255,255,0.9)] text-center">LOGIN</p></button> 
</div>

<div className="ml-5 w-full">

<div>
<a href="" className="font-montserrat text-[20px] font-semibold leading-[24.38px] text-left underline-offset-[from-font] decoration-skip-ink-none text-[rgba(0,0,0,0.7)]">Forgot password</a>
</div>

<div className="w-auto">
<a href="" className="font-montserrat text-[20px] font-semibold leading-[24.38px] text-left underline-offset-[from-font] decoration-skip-ink-none text-[rgba(0,0,0,0.7)]">Register</a>
</div>

</div>


</div>

  </div>
  
  
  
  
  </div>

 
</div>
    
    </>
  )
}

export default App
