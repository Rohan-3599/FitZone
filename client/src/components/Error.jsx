import React, { Fragment } from 'react';
import './style.css';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {Header} from './Header';

class Error extends Component {
    constructor(props){
       super(props);
        this.state = {
            count: 0,
        }
        this.slide = this.slide.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    
    goBack(){
        this.props.history.goBack();
    }
   
    slide(){
        if ( this.state.count % 2 === 0){
        $('.error').css({"transform" : "translate(26em,0)" ,  "transition" : "1s ease-in-out"});
        $('#fa-angle-right').css({ "opacity" : "0" ,  "transition" : "linear"});
        $('#fa-angle-left').css({ "opacity" : "1" ,  "transition" : "1s ease-in-out"});
        this.setState((prev) => {
         return { count: prev.count +1 };
        })
        }
        else {
            $('.error').css({"transform" : "translate(0,0)" ,  "transition" : "1s ease-in-out"});
            $('#fa-angle-left').css({ "opacity" : "0" , "transition" : "linear"});
            $('#fa-angle-right').css({ "opacity" : "1" ,  "transition" : "1s ease-in-out"});
            this.setState((prev) => {
                return { count: prev.count +1 };
               })
        }
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
        
            <div className="box">
                <div className="msg">
                 <div className="error-line"></div>
                 <div className="error-msg">
                     <h4 className="reason">Check The Following Points :</h4>
                     <ul className="list">
                         <li className="li-msg">The server is down.</li>
                         <li className="li-msg">The page was moved.</li>
                         <li className="li-msg">The page never existed.</li>
                         <li className="li-msg">The user typed the URL in wrong.</li>
                         <li className="li-msg">The URL is broken.</li>
                     </ul>
                 </div>
                </div>
       <div className="error">
          <Link onClick={this.slide}  className="a-img"><div classname="show-bg" ><i className="fa fa-angle-right" id="fa-angle-right" aria-hidden="true"></i>
          <i className="fa fa-angle-left" id="fa-angle-left" aria-hidden="true"></i></div>
        </Link>
           <div className="xyz-msg">
          <h1 className="new"> 404 Error Page</h1> <br/>
           <p className="p-new">OOPS!!<br/><br/>
            This page doesn't Exist.</p><br/>
            <Link onClick={this.goBack} className="home-btn">Go Back</Link>
            </div>
       </div>
       </div>
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
};
export default Error;