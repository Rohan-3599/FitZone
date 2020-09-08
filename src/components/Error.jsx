import React, { Fragment } from 'react';
import './style.css';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Error extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.history.goBack();
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
                     <h4 className="reason">Check The Following Reasons :</h4>
                     <ul className="list">
                         <li className="li-msg">The Url May be Incorrect.</li>
                         <li className="li-msg">The Page Might No Longer Be Available.</li>
                         <li className="li-msg">The Page Might Be Under Maintenace</li>
                         <li className="li-msg">Internal Server Error</li>
                     </ul>
                 </div>
                </div>
       <div className="error">
          <h1 className="new"> 404 Error Page</h1> <br/>
           <p className="p-new">OOPS!!<br/><br/>
            This page doesn't Exist.</p><br/>
            <Link onClick={this.goBack} className="home-btn">Go Back</Link>
       </div>
       </div>
  
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