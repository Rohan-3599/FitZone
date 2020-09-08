import React, { Component, Fragment } from 'react';
import './style.css';
import $ from 'jquery';

import { Header } from './Header';

class Contact extends Component {
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
                            <a className="link" href="/aboutus/#container"><span className="s1">Fit</span><span className="s2">Zone</span></a>
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
    <div className="hero-section set-bg" >
   
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hero-text">
                      
                    </div>
                </div>
            </div>
        </div>
    
    
    </div>
    <section className="contact-section spad">
    <hr/>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-text">
                        <div className="section-title">
                       
                            <h2 className="con-h2">Get in touch</h2>
                            <p className="con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas.</p>
                        </div>
                        <div className="contact-widget">
                            <ul>
                                <li className="new1"><b>Rani Ghat<br />Patna, Bihar 800006</b> </li>
                                <li className="new1"><b>+91 990221 123<br />example@fitzone.com</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <form action="#" className="contact-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Your Name"  />
                            </div>
                            <div className="col-lg-6">
                                <input type="email" placeholder="Your E-mail"  />
                            </div>
                            <div className="col-lg-12">
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Message"></textarea>
                                <input type="submit" className="submit-btn contact-btn" value="Send" />
                            </div>
                        </div>
                    </form>
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
export default Contact;