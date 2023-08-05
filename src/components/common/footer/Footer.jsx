import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>
      <div className='legal'>
        <span>© 2023 BazuBrandsProperties. Designed By SteGe.</span>
      </div>
    </>
  )
}

export default Footer
