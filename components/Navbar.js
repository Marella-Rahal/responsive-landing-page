import $ from "jquery";
export default function Navbar() {

  const openMenu=()=>{
    $('#hamburger').css('display','none');
    $('#close').css('display','flex');
    $('#menu').css('display','flex');

  }

  const closeMenu=()=>{
    $('#hamburger').css('display','flex');
    $('#close').css('display','none');
    $('#menu').css('display','none');

  }

  return (
    <>

        <div className="relative container flex items-center justify-between p-3 mx-auto my-5">

                <div>
                    <img  src="logo.svg" alt=""/>
                </div>

                <div className="md:hidden">

                    <img  id="hamburger" src="icon-hamburger.svg" alt="" onClick={openMenu} style={{display:'flex'}}/>
                    
                    <img  id="close" src="icon-close.svg" alt="" onClick={closeMenu} style={{display:'none'}}/>

                </div>

                <div className="hidden md:flex space-x-8 ">

                    <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                    <a  href="#" className="hover:text-darkGrayishBlue">Product</a>
                    <a  href="#" className="hover:text-darkGrayishBlue">About Us</a>
                    <a  href="#" className="hover:text-darkGrayishBlue">Careers</a>
                    <a  href="#" className="hover:text-darkGrayishBlue">Community</a>

                </div>

                <div className="hidden md:block p-2 text-white rounded-full bg-brightRed hover:bg-brightLightRed">

                    <a href="#">GetStarted</a>

                </div>
          
        </div>

        <div id="menu" style={{display:'none'}} className="absolute left-1/4 w-1/2  flex-col font-bold p-7 space-y-6 bg-white drop-shadow-xl items-center md:hidden" >
                  <a href="#">Pricing</a>
                  <a href="#">Products</a>
                  <a href="#">About Us</a>
                  <a href="#">Careers</a>
                  <a href="#">Community</a>
        </div> 

    </>
  )
}
