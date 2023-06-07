import React from 'react'
import Navbar from './navbar';
import heroimage from "./images/hero-img.png"
import { useNavigate } from 'react-router-dom';
import client1 from "./images/client-1.png"
import client2 from "./images/client-2.png"
import client3 from "./images/client-3.png"
import client4 from "./images/client-4.png"
import client5 from "./images/client-5.png"
import client6 from "./images/client-6.png"
import client7 from "./images/client-7.png"
import client8 from "./images/client-8.png"

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar></Navbar>
        <div className='mybg'>
            <h2 className='purple mt-4 text-center' data-aos="fade-left">We offer Agricultural solutions for growiwng your business</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non expedita illo fugit ab nemo. ipsum dolor sit amet consectetur, adipisicing elit. Neque et eos magnam voluptate velit maxime ullam.</p>

            <button className='btn btn-primary btn-lg my-3' onClick={() => {navigate("/pricing")}}>Get Started</button>

            <img src={heroimage} alt="" className='mt-4 img-fluid' />
        </div>

        <div className="clients p-4">
            <h2 className='purple mt-3 fs-2 text-center' data-aos="fade-left">Our Clients</h2>

            <div className="allclients d-flex justify-content-center align-items-center flex-wrap gap-5 my-5">
                <img src={client1} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client2} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client3} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client4} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client5} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client6} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client7} alt="" data-aos="fade-left" className='clientimage'/>
                <img src={client8} alt="" data-aos="fade-left" className='clientimage'/>
            </div>
        </div>
        <div className="who mb-5">
            <h2 data-aos="fade-left"  className='purrple fs-2 my-4'
            data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">Who are we?</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quod aliquid facere dolore accusamus dolor sunt possimus esse laudantium assumenda saepe ratione ipsum est, modi nobis earum perferendis sapiente, ipsa error. Qui quas reiciendis, ab ex quo distinctio repellendus esse veniam atque quisquam, doloremque delectus nobis tempora sint cum? Totam, illum nemo sint amet, alias exercitationem expedita accusantium, ad consequatur reiciendis eaque culpa obcaecati reprehenderit ab numquam quae tenetur incidunt.</p>

            <button
            className='btn btn-danger btn-lg' onClick={() => {navigate("/about")}}>Learn More</button>
        </div>
    </div>
  )
}
