import React, { Component } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from "../components/core/HomePage/CodeBlocks"

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="w-11/12 h-screen flex flex-col max-w-maxContent items-center  mx-auto text-white">
        <Link to={"/signup"}>
          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duratin-200 hover:scale-95 w-hit'>
            <div className='flex flex-row items-center gap- rounded-full px-10 py-[5px]
                 transition-all duratin-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>


        <div className='text-white mt-6 font-bold text-4xl'>
          Empower Your Future with
          <HighlightText text={" Coding Skills"} />
        </div>

        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>


        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"} className="shadow-indigo-500/50">
            Book Demo
          </CTAButton>
        </div>


        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-6px] shadow-blue-200 mt-12">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>


        {/* {code section 1} */}
        <div >


          <CodeBlocks
            position="lg:flex-row"
            heading={
              <div className='text-4xl font-semibold'>
                Unlock your <HighlightText text={"Coding Potential"} /> with our online courses
              </div>
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/try",
              active: true
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/learn",
              active: false
            }}
            codeblock={`< !DOCTYPE html>\n<html>\n<head><title>Example</title></head>\n<body>\n<h1><ahref="/">Header</a>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a></nav>\n</body>\n</html>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}

            codeColor="text-white-500"


          />


        </div>


        {/* {code section 2} */}

        <div >


          <CodeBlocks
            position="lg:flex-row-reverse"
            heading={
              <div className='text-4xl font-semibold'>
                Unlock your <HighlightText text={"Coding Potential"} /> with our online courses
              </div>
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/try",
              active: true
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/learn",
              active: false
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title></head>\n<body>\n<h1><a href="/">Header</a>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a><a href="three/">Three</a></nav>\n</body>\n</html>`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
            codeColor="text-yellow-200"


          />


        </div>


      </div>




      {/* Section 2 */}
      {/* hw gradient */}

      {/* Section 3 */}
      {/* Section 4 */}
      {/* Footer */}

    </div>

  )
}

export default Home
