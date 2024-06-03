import React from 'react'
import "../assets/styles/landing/landing.css"

function Landing() {
  return (
    <><main>
    <section class="hero">
        <h1>EVANSTECH</h1>
        <p>We are a the best developers in East africa.</p>
        <button>More</button>
    </section>
    <section class="features">
        <h2>Our services</h2>
        <ul>
            <li>
                <i class="fas fa-lightbulb"></i>
                <h3>software developement</h3>
                <p>We develope softwares to solve complex problems.</p>
            </li>
            <li>
                <i class="fas fa-rocket"></i>
                <h3>Web developement</h3>
                <p>We develope websites to market businesses and organizations online.</p>
            </li>
            <li>
                <i class="fas fa-team"></i>
                <h3>graphic design </h3>
                <p>We make beautiful designs of posters and banners.</p>
            </li>
        </ul>
    </section>
    <section class="call-to-action">
        <h2>in need of our services</h2>
        <p>reach us today.</p>
        
    </section>
</main></> 
  );
}

export default Landing