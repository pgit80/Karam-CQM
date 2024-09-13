import React from 'react'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import Footer from '../component/Footer'
import a1 from '../component/img/about-overview-08.jpg';

const About = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className='row my-5'>
        <div className='col-md-5 mx-auto my-auto'>
            <h1>About Us</h1>
            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the                
                 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                   desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
        <div className='col-md-5 mx-auto'>
            <img src={a1}  className='w-100'/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About