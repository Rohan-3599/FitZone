import React, { Component, Fragment } from 'react';
import './style.css';
import $ from 'jquery';
import member from './img/member-3.jpg';

import { Header } from './Header';

class aboutus extends Component {
    search(){
   
		$('.search-model').fadeIn(400);
	

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});
  }
    render(){
        return(
            <Fragment>
          <header className="header-section">
        <div className="container-fluid">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                    <div className="logo">
                            <a className="link" href="#container"><span className="s1">Fit</span><span className="s2">Zone</span></a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                    <nav className="main-menu mobile-menu">
        <ul>
        <Header/>
            <li className="phone-num"><i className="fa fa-phone"></i><span>+91 990221 123</span></li>
            <li className="search-btn search-trigger" onClick={this.search}><i className="fa fa-search"></i></li>
        </ul>
    </nav>
           
                       
                    </div>
                </div>
            </div>
        </div>
    </header>  
    <div className="hero-section set-bg1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hero-text">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className="lifestyle-section spad">
    <div className="lifeline"></div>
        <div className="container" id="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="lifestyle-text">
                        <div className="section-title">
                            <h2>All you need to know <br />about FitZone</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis. </p>
                            <a href="#" className="lifestyle-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col1">
                
                </div>
            </div>
        </div>
    </section>
    <section className="about-counter set-bg2 spad" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="about-counter-text">
                        <div className="counter-head">
                            <h2>Fitness CheckUp Daily</h2>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
                                vel facilisis. </p>
                        </div>
                        
                       <a href="/#booking-classes" className="counterprimary-btn">  <div className="counter-btn"> Join Now </div></a>
                       
                    </div>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="about-single-counter">
                        <div className="counter-icon">
                            <i className="flaticon-043-muscles"></i>
                        </div>
                        <div className="counter-text">
                            <span className="counter-num counter">245</span>
                            <span>Members</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="about-single-counter">
                        <div className="counter-icon">
                            <i className="flaticon-009-medal"></i>
                        </div>
                        <div className="counter-text">
                            <span className="counter-num counter">38</span>
                            <span>Achievements</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="about-single-counter">
                        <div className="counter-icon">
                            <i className="flaticon-044-fitness-1"></i>
                        </div>
                        <div className="counter-text">
                            <span className="counter-num counter">16</span>
                            <span>Total CheckUp</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="about-single-counter">
                        <div className="counter-icon">
                            <i className="flaticon-008-tactics-2"></i>
                        </div>
                        <div className="counter-text">
                            <span className="counter-num counter">125</span>
                            <span>Testing/week</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about-team spad" id="about-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 text-center">
                    <div className="section-title">
                        <h2>Meet the Developers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-team-member">
                        <div className="team-member-pic">
                            <img src={member}  style={{opacity:0.9}}alt=""/>
                        </div>
                        <div className="team-member-desc">
                            <h3>Rohan Sinha</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="team-member-certification">
                        <h5>Skills</h5>
                            <ul>
                                <li>CodeChef Level 1</li>
                                <li>CodeChef Level 2</li>
                                <li>JavaScript</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-team-member">
                        <div className="team-member-pic">
                        <img src={member} style={{opacity:0.9 }}alt=""/>
                        </div>
                        <div className="team-member-desc">
                            <h3>Bhuwan Baurai</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="team-member-certification">
                        <h5>Skills</h5>
                            <ul>
                                <li>CodeChef Level 1</li>
                                <li>CodeChef Level 2</li>
                                <li>JavaScript</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-team-member">
                        <div className="team-member-pic">
                        <img src={member}  style={{opacity:0.9}}alt=""/>
                        </div>
                        <div className="team-member-desc">
                            <h3>Abhikrit Raj Singh</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="team-member-certification">
                            <h5>Skills</h5>
                            <ul>
                                <li>CodeChef Level 1</li>
                                <li>CodeChef Level 2</li>
                                <li>JavaScript</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="callto-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="callto-text">
                        <h2>Stay Fit With Us</h2>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="/#booking-classes" className="lifestyle-btn callto-btn">Join Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-text">
                        <div className="reserved">
Copyright &copy;{(new Date().getFullYear())} All rights reserved | This Website is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="#" target="_blank">FitZone</a>
</div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="search-model">
		<div className="h-100 d-flex align-items-center justify-content-center">
			<div className="search-close-switch">+</div>
			<form className="search-model-form">
				<input type="text" id="search-input" placeholder="Search here....." />
			</form>
		</div>
	</div>
            </Fragment>

        );
    }
}
export default aboutus;