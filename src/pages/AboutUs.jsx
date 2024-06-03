import React from "react";
import "../assets/styles/about/about.css";

function AboutUs() {
  return (
    <>
    <main>
    <section class="hero">
        <h1>EvansTech company</h1>
        <p>We are the best ICT company in Eastern africa, we manufacture high quality softwares.</p>
        <button> More</button>
    </section>
    <section class="team">
    <h2>Our Team</h2>
    <div class="card">
        <div class="card-content">
            <h3>Manager</h3>
            <p>EVANS KIPNGETICH</p>
            <p>Evans is skilled and experienced personel in the world of ICT. He has managerial skill ta help to push our company forward.</p>
        </div>
    </div>
    <div class="card">
        <div class="card-content">
            <h3>sinior developer</h3>
            <p>Frank denis</p>
            <p>he is skilled in code formating for high quality output in our company.</p>
        </div>
    </div>
    <div class="card">
      
        <div class="card-content">
            <h3>full stack developers</h3>
            <p> justus and Dennis </p>
            <p>this are develers those assist in coding and designining the whole softwares.</p>
        </div>
    </div>
    
    </section>
    
    <section class="call-to-action">
        <h2>reach us Today for quality services!</h2>
        <p>we deliver high quality.</p>
        
    </section>
    </main>
    </>
  )
    
}

export default AboutUs;
