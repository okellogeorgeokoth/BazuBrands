import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./terms.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Terms and Conditions' subtitle='Check out our company story and work process' />
          <h3>Please read these Terms and Conditions ("Agreement") carefully before using the services provided by Bazuproperties ("Company," "we," or "us"). This Agreement sets forth the legally binding terms and conditions for your use of our property management, buying and selling, letting of houses and premises, professional renovation, and property consultation services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by this Agreement.</h3>
           
          <br /><ol>
           <li>Service Provision: 1.1. We strive to provide accurate and up-to-date information regarding properties, market trends, and related services. However, we do not warrant the accuracy, completeness, or reliability of any information provided. 1.2. Our Services are subject to availability, and we reserve the right to modify, suspend, or discontinue any aspect of our Services without prior notice.</li>
           <br /><li>Property Transactions: 2.1. If you are engaging in property buying or selling services, we act as an intermediary and facilitator. We are not responsible for the actions, representations, or warranties of the buyers, sellers, or any other parties involved in the transaction. 2.2. We do not guarantee the availability, condition, or suitability of any property listed. It is your responsibility to conduct thorough due diligence, inspections, and verifications before making any purchase or rental decisions. 2.3. Any agreements or contracts entered into between buyers, sellers, landlords, and tenants are solely the responsibility of the involved parties. We are not a party to such agreements and do not assume any liability or responsibility for their performance or enforcement.</li>
           <br /> <li>Property Management: 3.1. If you engage our property management services, we will make reasonable efforts to manage and maintain your property in accordance with industry standards and applicable laws. 3.2. We will strive to find suitable tenants, conduct screenings, collect rent, handle maintenance requests, and perform other related tasks. However, we do not guarantee occupancy, rent collection, or the behavior of tenants. 3.3. Our fees and charges for property management services will be outlined in a separate agreement or contract.</li>
           <br /><li>Professional Renovation: 4.1. We offer professional renovation services to enhance the value and appeal of your property. The scope of work, timelines, and costs will be discussed and agreed upon in advance. 4.2. While we strive to deliver high-quality results, we do not guarantee specific outcomes or results from our renovation services. 4.3. Any materials, fixtures, or designs selected for the renovation will be subject to availability and your approval.</li>
           <br /> <li>Consultation Services: 5.1. Our property consultation services are intended to provide general advice and information. We do not provide legal, financial, or tax advice. 5.2. Any recommendations, suggestions, or opinions offered during consultation sessions are based on our expertise and experience but should not be considered as a substitute for professional advice.</li>
           <br /><li>Limitation of Liability: 6.1. To the extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our Services or any property transactions. 6.2. We shall not be responsible for any losses, damages, or liabilities resulting from the actions, omissions, or negligence of third parties, including buyers, sellers, landlords, tenants, contractors, or service providers.</li>
           <br /><li>Intellectual Property: 7.1. All content, logos, trademarks, and intellectual property displayed on our website or provided through our Services are the property of Bazuproperties or its licensors. You may not use, reproduce, modify, or distribute any of our intellectual property without our prior written consent.</li>
           <br /><li>Privacy: 8.1. We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using our Services, you consent to the collection, use, and disclosure of your personal information as outlined in our Privacy Policy.</li>
           <br /><li>Governing Law and Jurisdiction: 9.1. This Agreement shall be governed by and construed in accordance with the laws of [Country/State]. Any disputes arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts located in [City/Region].</li>
           <br /><li>Modifications: 10.1. We reserve the right to modify or update this Agreement at any time. The most current version will be posted on our website. Your continued use of our Services after any modifications constitute your acceptance of the revised terms.</li>
           </ol>
            <br />
            <center><h3>Please carefully review these Terms and Conditions. If you have any questions or concerns, please contact us for clarification.</h3></center>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
