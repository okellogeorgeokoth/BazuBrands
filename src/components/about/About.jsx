import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to Bazuproperties, your premier destination for all your real estate needs. We are a dedicated team of professionals specializing in property management, buying and selling properties, letting of houses and premises, professional renovation services, and property consultation. With our expertise and commitment to excellence, we strive to provide our clients with exceptional service and unparalleled results.</p>
            <p>At Bazuproperties, we understand that real estate transactions can be complex and overwhelming. That's why we are here to guide you through every step of the process, ensuring a smooth and successful experience. Whether you are a property owner, a prospective buyer or tenant, or someone seeking expert advice on property matters, we have the knowledge, resources, and passion to assist you.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
