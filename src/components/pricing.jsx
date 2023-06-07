import React from 'react'
import Navbar from './navbar'
import pricing2 from "./images/pricing-business.png"
import pricing1 from "./images/pricing-free.png"
import pricing3 from "./images/pricing-starter.png"
import pricing4 from "./images/pricing-ultimate.png"


export default function Pricing() {
  return (
    <div>
        <Navbar></Navbar>
       <h3 className="text-center purple mt-5 fw-bold">Our Pricing</h3>
       <h3 className="text-center fs-4 mt-4">Here is our pricing list</h3>
       <div className="d-flex my-5 justify-content-around align-items-center flex-wrap">

       <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing1} alt="" />
    </li>
    <li class="list-group-item purple text-center fs-4">Free plan</li>
    <li class="list-group-item purple text-center fs-4">1000 naira/mth</li>
  </ul>
</div>
       <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing2} alt="" />
    </li>
    <li class="list-group-item purple text-center fs-4">Business plan</li>
    <li class="list-group-item purple text-center fs-4">5000 naira/mth</li>
  </ul>
</div>
       <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing3} alt="" />
    </li>
    <li class="list-group-item purple text-center fs-4">Starter plan</li>
    <li class="list-group-item purple text-center fs-4">10000 naira/mth</li>
  </ul>
</div>
       <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing4} alt="" />
    </li>
    <li class="list-group-item purple text-center fs-4">Ultimate plan</li>
    <li class="list-group-item purple text-center fs-4">20000 naira/mth</li>
  </ul>
</div>
       </div>
    </div>
  )
}
