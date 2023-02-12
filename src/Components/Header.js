import React, { Component } from 'react';
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var profilepic= "images/"+this.props.data.image;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        // return   <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
          if (network.className =="scholar"){
              return <li key={network.name}><a href={network.url} target="_blank"><FontAwesomeIcon
                  icon={faGoogle}/></a></li>
          }
          else{
              return   <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
          }
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#news">News</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Research</a></li>
            {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
                 <img className="profile-pic"  src={profilepic} alt="Dulanga Weerakoon Profile Pic" width="100" />

            <h1 className="responsive-headline">{name}.</h1>
            <h3><span> I'm a fourth-year  PhD student in Computer Science at School of Computing and Information Systems, Singapore Managment University.</span></h3>.
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
