import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Find our recent properties within diffrent regions' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
