import React, { Component, Fragment } from 'react';
import './style.css';
import $ from "jquery";
import { Header } from './Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from './img/slide-1.jpg';
import slide2 from './img/slide-2.jpg';
import slide3 from './img/slide-3.jpg';
import Slider from "react-slick";
const photos = [
    {
    name: "Photo 1",
    url: slide1,
    },
    {
        name: "Photo 2",
        url: slide2,
        },
    {
        name: "Photo 3",
       url: slide3,
        
         },
]
 class Fitness extends Component {
 

  search(){
   
		$('.search-model').fadeIn(400);
	

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});
  }
 
    render(){
        const settings = {
            fade: true,
            infinite: true,
            speed:500,
            slidesToShow: 1,
            arrows : true,
            slidesToScroll: 1,
            className: "slides",
            autoplay:true,
            autoplaySpeed:4000,
            prevArrow: (
                <div className="input-leftcontainer" id="input-leftcontainer" >
          <div className="imgbanbtn" id="imgbanbtn-left"  >
<i className="fa fa-angle-left" aria-hidden="true" ></i>
</div>
            </div>
                         ),
             nextArrow: (
                <div className="input-leftcontainer" id="input-leftcontainer" >
                <div className=" imgbanbtn-right" id="imgbanbtn-right"  >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                </div>
                                     ),
          
        }
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
    <div className="input-leftcontainer" id="input-leftcontainer" >
    
    <h1 className="a">What is FitZone?</h1>
    <p className="b">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        <a href="#" className="primary-btn">Read More</a>

<div className="imgban"  >

<Slider {...settings}>
{photos.map((photo) => {
    return(  
        <div className="image-div" >
       
       <img src={photo.url}/>
       
    
       </div>
    )
})
    }


</Slider>
</div>


</div>
<div className="booking-classes" id="booking-classes">
<div className="container-fluid">
 <div className="booking-text">
 <div className="row">
  <div className="col-lg-6">
<div className="row">
<div className="col-lg-12">
<div className="booking-heading " >
<div className="booking-inner-text">
<h2>Are You Fit Enough?</h2>
 <p>Dont be afraid to Book your first class.</p>
</div>
</div>
  </div>
 </div>
  </div>
                    <div className="col-lg-6">
                        <div className="booking-form">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Your Name"></input>
                                        <input type="text" placeholder="Your Phone"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" placeholder="E-mail Address"></input>
                                        <input type="submit" value="Submit" className="submit-btn"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="services-section spad">
        <div className="line"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 m-auto text-center">
                    <div className="section-title">
                        <h2>Join Our Program Today</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single-services">
                        <i className="flaticon-050-weightlifting"></i>
                        <h4>FitZone</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-services">
                        <i className="flaticon-004-dumbbell"></i>
                        <h4>Fitness</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-services">
                        <i className="flaticon-045-fitness"></i>
                        <h4>Exercise</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-services">
                        <i className="flaticon-033-pump"></i>
                        <h4>Diet + Tips</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="lifestyle-section spad">
    <div className="lifeline"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="lifestyle-text">
                        <div className="section-title">
                            <h2>Lifestyle & Diet</h2>
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
                <div className="col">
                  
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
                        <a href="#booking-classes" className="lifestyle-btn callto-btn">Join Us</a>
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
			<div className="search-close-switch" >+</div>
			<form className="search-model-form">
				<input type="text" id="search-input" placeholder="Search here....."></input>
			</form>
		</div>
	</div>
         </Fragment>
            );
    }
    
}
export default Fitness;
