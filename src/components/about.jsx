import React from 'react'
import Navbar from './navbar'
import about1 from "./images/about1.jpg"
import about2 from "./images/about2.jpg"
import about3 from "./images/about3.jpg"
import about4 from "./images/about4.jpg"
import about5 from "./images/about5.jpg"
import about6 from "./images/about6.jpg"
import about7 from "./images/about7.jpg"
import about8 from "./images/about8.jpg"

export default function About() {
  return (
    <div>
        <Navbar></Navbar>
        <h2 className='purple fs-2 fw-bold text-center mt-4'>About Us</h2>
        <p className='px-5 fs-6 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque eaque assumenda ullam, corrupti reiciendis consequatur. Deserunt fugit modi repudiandae facere odit dolorum ipsa architecto quidem consequatur qui suscipit obcaecati iusto voluptatibus unde consectetur nihil, sint, earum saepe accusamus ipsum. Labore quisquam dolores temporibus in repudiandae nam suscipit quia alias.</p>

        <div className="allimages px-5">
            <img src={about1} alt="" className='aboutimage'/>
            <img src={about2} alt="" className='aboutimage'/>
            <img src={about3} alt="" className='aboutimage'/>
            <img src={about4} alt="" className='aboutimage'/>
            <img src={about5} alt="" className='aboutimage'/>
            <img src={about6} alt="" className='aboutimage'/>
            <img src={about7} alt="" className='aboutimage'/>
            <img src={about8} alt="" className='aboutimage'/>
        </div>
        <p className='fs-6 mt-4 px-4 purple'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil voluptas aliquam doloremque, molestiae expedita fuga aperiam harum quasi. Odio alias necessitatibus cupiditate ab quibusdam porro vitae quasi iusto vel reiciendis, dolorem sed vero id distinctio similique quam debitis. Neque, minus illo possimus eligendi veritatis, dicta labore dolor sunt saepe reiciendis tempore quaerat laudantium asperiores beatae voluptatem quidem dignissimos voluptatibus ipsum repudiandae debitis nemo accusamus. Aliquid doloribus placeat voluptatibus veniam ea? Impedit, neque, non harum laboriosam beatae quidem omnis porro similique dicta sunt tempore velit officia dolore veritatis. Hic necessitatibus numquam assumenda atque architecto beatae quos fuga id adipisci quae.</p>
    </div>
  )
}
