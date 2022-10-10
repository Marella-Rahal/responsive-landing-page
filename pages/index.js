import Link from "next/link";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>

      <Navbar/>

      <div className="container mx-auto my-10 flex flex-col-reverse md:flex-row md:justify-between">


            <div className="space-y-16 max-w-lg  m-5  md:m-0 flex flex-col items-center md:items-start">

                  <h1 className="font-bold  text-4xl md:text-5xl ">
                    Bring everyone together to build better products
                  </h1>

                  <p className="text-darkGrayishBlue">
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                  </p>

                  <div className="p-3 px-5 text-white rounded-full bg-brightRed w-fit hover:bg-brightLightRed">

                      <a href="#">GetStarted</a>

                  </div> 

            </div>




            <div>

                  <img src="illustration-intro.svg" alt=""/>

            </div>

      </div>


      {/* //************************************ */}

      <div className="container mx-auto my-10  flex flex-col md:flex-row justify-between">



        <div className=" md:w-1/2 mx-auto space-y-10 flex flex-col text-center md:text-left">

            <h2 className="font-bold text-2xl md:text-3xl max-w-md">
            What's different about Manage?
            </h2>

            <p className="text-darkGrayishBlue text-lg max-w-md">
            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
            </p>


        </div>



        <div className="md:w-1/2 flex flex-col space-y-10 mt-16 md:mt-0">

                <div className="flex flex-row -space-x-8 md:space-x-5">

                      <div className="rounded-full bg-brightRed text-white p-2 px-4 h-fit z-10">
                                01
                      </div>

                      <div className="flex flex-col space-y-5">

                      

                        <h3 className="font-bold text-lg bg-brightRedSupLight md:bg-transparent py-1.5 px-10 md:px-3 rounded-l-full">
                        Track company-wide progress
                        </h3>


                        <div className="text-darkGrayishBlue text-center px-3 md:text-left">
                        See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.
                        </div>


                      </div>

                </div>




                <div className="flex flex-row -space-x-8 md:space-x-5">

                      <div className="rounded-full bg-brightRed text-white p-2 px-4 h-fit z-10">
                                02
                      </div>

                      <div className="flex flex-col space-y-5">

                          <h3 className="font-bold text-lg bg-brightRedSupLight md:bg-transparent py-1.5 px-10 md:px-3 rounded-l-full">
                          Advanced built-in reports
                          </h3>


                          <div className="text-darkGrayishBlue text-center px-3 md:text-left">
                          Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                          </div>

                      </div>

                </div>


                <div className="flex flex-row -space-x-8 md:space-x-5">

                    <div className="rounded-full bg-brightRed text-white p-2 px-4 h-fit z-10">
                              03
                    </div>

                    <div className="flex flex-col space-y-5">

                        <h3 className="font-bold text-lg bg-brightRedSupLight md:bg-transparent py-1.5 px-10 md:px-3 rounded-l-full">
                        Everything you need in one place
                        </h3>


                        <div className="text-darkGrayishBlue text-center px-3 md:text-left">
                        Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                        </div>

                    </div>

                </div>


        </div>

      </div>

      {/* //*********************************** */}

      <div className="container mx-auto flex flex-col items-center mt-28 mb-7 space-y-20">

        {/* //todo1 */}
        <div>
          <h2 className="font-bold text-2xl md:text-3xl">What's Different About Manage?</h2>
        </div>

        {/* //todo2  */}
        <div className="flex flex-col space-y-20 md:space-y-0 md:space-x-7 md:flex-row">

          <div className="flex flex-col items-center bg-veryLightGray justify-between space-y-7 max-w-xs p-3 rounded-lg">

            <img src="avatar-anisha.png" alt="" className="w-1/4 -mt-12"/>

            <h2 className="font-bold">Anisha Li</h2>

            <p className="text-darkGrayishBlue text-center">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>

          </div>


          <div className="flex flex-col items-center bg-veryLightGray justify-between space-y-7 max-w-xs p-3 rounded-lg">

            <img src="avatar-ali.png" alt="" className="w-1/4 -mt-12"/>

            <h2 className="font-bold">Ali Bravo</h2>

            <p className="text-darkGrayishBlue text-center">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>

          </div>


          <div className="flex flex-col items-center bg-veryLightGray justify-between space-y-7 max-w-xs p-3 rounded-lg">

            <img src="avatar-richard.png" alt="" className="w-1/4 -mt-12"/>

            <h2 className="font-bold">Richard Watts</h2>

            <p className="text-darkGrayishBlue text-center">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>

          </div>


        </div>

        {/* //todo3 */}
        <div className="rounded-full text-white bg-brightRed p-3 px-6 hover:bg-brightLightRed">
          <a href="#">Get Started</a>
        </div>


      </div>

      {/* //**********************************  */}

      <div className="bg-brightRed flex flex-col items-center md:justify-between space-y-10 md:space-y-0 md:flex-row p-7 px-20">

        <h1 className="font-bold text-white text-3xl text-center max-w-md md:text-4xl md:text-left">Simplify how your team works today</h1>

        <div className="text-brightRed bg-white rounded-full  hover:bg-veryDarkBlue w-fit p-2 px-7">
          <a href="#">Get Started</a>
        </div>

      </div>

      {/* //**********************************  */}

      <div className="bg-veryDarkBlue  p-7 px-20 flex flex-col-reverse items-center md:justify-between md:flex-row">

        {/* //todo1 */}
        <div className=" h-32 flex justify-between flex-col-reverse md:flex-col">

          <div className="text-white md:hidden">
            Copyright &copy; 2022,All Rights Reserved
          </div>

          <div>
            <img src="logo-white.svg"/>
          </div>
          
          
          <div className="flex  space-x-5">

              <a href="#">
                <img src="icon-facebook.svg"/>
              </a>

              <a href="#">
                <img src="icon-youtube.svg"/>
              </a>

              <a href="#">
                <img src="icon-twitter.svg"/>
              </a>

              <a href="#">
                <img src="icon-pinterest.svg"/>
              </a>

              <a href="#">
                <img src="icon-instagram.svg"/>
              </a>

          </div>


        </div>

        {/* //todo2 */}
        <div className="flex mb-16 space-x-24 md:mb-0">

          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white hover:text-brightRed">Home</a>
            <a href="#" className="text-white hover:text-brightRed">Pricing</a>
            <a href="#" className="text-white hover:text-brightRed">Products</a>
            <a href="#" className="text-white hover:text-brightRed">About</a>
          </div>

          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white hover:text-brightRed">Careers</a>
            <a href="#" className="text-white hover:text-brightRed">Community</a>
            <a href="#" className="text-white hover:text-brightRed">Privacy Policy</a>
          </div>



        </div>

        {/* //todo3 */}
        <div className="flex flex-col space-y-20 mb-16 md:mb-0">

          <div className="flex space-x-4">

            <input className="rounded-full focus:outline-none p-3" placeholder="Updated in your inbox"/>

            <div className="p-2 px-4 w-fit bg-brightRed hover:bg-brightLightRed text-center text-white rounded-full">
              <a href="#">Go</a>
            </div>
            

          </div>

          <div className="hidden text-white md:flex">
            Copyright &copy; 2022,All Rights Reserved
          </div>

        </div>


      </div>

      {/* //********************************** */}

    </>
  )
}
