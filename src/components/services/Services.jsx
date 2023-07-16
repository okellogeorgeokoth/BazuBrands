import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import Heading from "../common/Heading"
const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Services' subtitle='Check out our company story and services' />

            <br /><h3><center>Our services encompass a wide range of areas within the real estate industry. Let's explore some of the key aspects of our business:</center></h3>
<br /><ol>
<br /><li>Property Management: We offer comprehensive property management services to property owners, including advertising vacancies, screening tenants, rent collection, property maintenance, and more. Our goal is to maximize your investment returns while minimizing the hassles associated with property ownership.</li>
<br /><li>Buying and Selling: Looking to buy or sell a property? Our experienced team will work closely with you to understand your requirements, conduct market research, handle negotiations, and ensure a successful transaction. We have a wide network of industry connections to help you find the perfect property or connect with potential buyers.</li>
<br /><li>Letting of Houses and Premises: As a prospective tenant, you can rely on us to help you find a suitable rental property that meets your needs and budget. We have a diverse portfolio of available houses and premises, and our dedicated team will assist you throughout the rental process.</li>
<br /><li>Professional Renovation: Whether you are renovating your own property or looking to upgrade an investment property, our renovation services are tailored to meet your specific requirements. Our team of skilled professionals will transform your property, enhancing its value and appeal.</li>
<br /><li>Property Consultation: We offer expert property consultation services to individuals, investors, and businesses. Our team will provide you with valuable insights, market analysis, and strategic advice to help you make informed decisions about your real estate investments.</li>
</ol>
<br /><blockquote>At Bazuproperties, we prioritize our clients' satisfaction and strive to exceed their expectations. We believe in building long-term relationships based on trust, integrity, and open communication. Our team stays up-to-date with the latest industry trends and regulations to provide you with accurate information and guidance.</blockquote>
<br /><p> We invite you to explore our website, browse our listings, and get in touch with our team to discuss your real estate needs. Let us be your trusted partner in achieving your property goals.</p>


</div> 
          </div>
      </section>
    </>
  )
}

export default Services
