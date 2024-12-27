function App() {
  return (
    <>
      <div className="h-screen flex relative overflow-hidden ">
        <div className="w-[45%] bg-[rgb(26,235,183)]"></div>
        <div className="w-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-[0px_0px_20px_0px_rgba(176,170,170,1)] rounded-lg bg-[rgb(255,255,255,0.1)]">
        <div className="w-[40%] flex justify-center items-center">
  <img  src="./images/image 1 (1).png" className=" h-auto w-auto max-h-[500px]  "></img>
  </div>


  <div className="w-[60%] h-auto sm:max-h-[590px]  flex flex-col justify-center items-center  overflow-hidden">

<div className="w-full h-auto max-w-[181px] max-h-[56px] ">
<h1 className=" font-montserrat sm:text-[50px] font-bold sm:leading-[60.95px] text-left underline-offset-[from-font] decoration-skip-ink-none text-[rgba(0,0,0,0.7)]">LOGIN</h1>
</div>

<div className="mt-5 ">
<input placeholder="Username" className=" w-full sm:w-[318px] sm:h-[58px] h-auto  border border-gray-300"></input>
</div>

<div className="mt-5">
<input placeholder="Password" className=" w-full sm:w-[318px] sm:h-[58px] h-auto border border-gray-300"></input>
</div>

<div className="flex justify-between items-center mt-5 ">

<div className="text-center">
<button className=" sm:w-[190.27px]  sm:h-[60.74px] h-auto  bg-[rgba(26,235,183,1)] border-[1px] border-[rgba(0,0,0,0.7)] text-center"><p className="font-montserrat sm:text-[25px] text-auto font-bold leading-[30.48px]  underline-offset-[from-font] decoration-skip-ink-none text-[rgba(255,255,255,0.9)] text-center">LOGIN</p></button> 
</div>

<div className=" ml-3 ms:ml-5">
<div >
<a href="" className="font-montserrat ms:text-[20px] font-semibold ms:leading-[24.38px] text-left underline-offset-[from-font] decoration-skip-ink-none text-[rgba(0,0,0,0.7)]">Forgot password</a>
</div>

<div>
<a href="" className="font-montserrat ms:text-[20px] font-semibold ms:leading-[24.38px] text-left underline-offset-[from-font] decoration-skip-ink-none text-[rgba(0,0,0,0.7)]">Register</a>
</div>

</div>


</div>

</div>
              </div>
      </div>
    </>
  );
}

export default App;
