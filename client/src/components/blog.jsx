import React, { Component, Fragment } from 'react';
import './style.css';
import { Header } from './Header';
import CountUp from 'react-countup'; 
import $ from 'jquery';
import like from './img/like.png';
import chat from './img/chat.png';
import video from './img/blog-video.jpg';
import img from './img/blog-4.jpg'

class blog  extends Component{
    constructor() {
        super();
        
        this.state = {
            customers : [],
            blogs: 6,
            error: false
        }
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore() {
        this.setState((prev) => {
          return { blogs: prev.blogs + 4};
        });
      }
    componentDidMount(){
        fetch('https://front-end-app-with-backend.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(customers => { this.setState({customers});
    }).catch( error =>{
        console.log(error);
        this.setState({
       error : true
        });
    });
    }
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
    <div className="hero-section set-bg3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hero-text">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="blog-section spad">
        <div class="container-fluid">
            <div class="row">
           
            <div class="col-lg-3 col-md-6">
                    <div class="single-blog-item plain-text">
                        <div class="blog-text">
                            <h2>“Pain is temporary.<br />Quitting lasts <br />forever.”</h2>
                            <span>Lance Armstrong</span>
                        </div>
                        <div class="blog-widget">
                            <ul>
                                <li><img src={like} alt="" /> <span className="like-span"><CountUp className="like-counter" end={25} duration={5}></CountUp> Likes</span></li>
                                <li><img src={chat} alt="" /> <span className="like-span"><CountUp className="like-counter" end={8} duration={7}></CountUp> Comments</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-blog-item blog-video">
                        <div class="blog-img">
                            <img src={video} alt="" />
                            <div class="play-btn">
                                <a href="#" class="pop-up"><i
                                        class="fa fa-play"></i></a>
                            </div>
                        </div>
                        <div class="blog-text">
                        <span class="video-time">12 Feb, 2019</span>
                        <div className="video-line"></div>
                        <br/> 
                            <h3>10 Minutes of Fitness</h3>
                            <div class="blog-widget">
                                <ul>
                                <li><img src={like} className="like-img" alt="" /> <span className="like-span"><CountUp className="like-counter" end={45} duration={5}></CountUp> Likes</span></li>
                                <li><img src={chat}  className="like-img" alt="" /> <span className="like-span"><CountUp className="like-counter" end={10} duration={7}></CountUp> Comments</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 { this.state.customers.slice(0, this.state.blogs).map(customer =>
                  <div class="col-lg-3 col-md-6 fade-in" key={customer.id}>
                    <div class="single-blog-item blog-item">
                        <div class="blog-img">
                            <img src={img} alt="" />
                        </div>
                        <div class="blog-text">
                            <span class="blog-time">12 Feb, 2019</span>
                            <h3>{customer.quote}</h3>
                 <p>{customer.message}</p>
                            <div class="blog-widget">
                                <ul>
                                <li><img src={like} className="like-img" alt="" /> <span className="like-span"><CountUp className="like-counter" end={60} duration={5}></CountUp> Likes</span></li>
                                <li><img src={chat} className="like-img" alt="" /> <span className="like-span"><CountUp className="like-counter" end={15} duration={7}></CountUp> Comments</span></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                   
             </div>
    )}
          <div className="col-lg-12 text-center">
                    <div className="blog-btn">
                    {this.state.blogs < this.state.customers.length &&
                        <button onClick={this.loadMore} className="blogload-btn" >Load More</button>
                    }
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
        )
    }
}

export default blog;