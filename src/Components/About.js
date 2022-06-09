import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var street2 = this.props.data.address.street2;
      var street3 = this.props.data.address.street3;
      var street4 = this.props.data.address.street4;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

             <p>I am <b>third-year PhD student in Computer Science</b>, advised by <b>Prof. Archan Misra</b>, at <b>School of Computing and Information Systems</b> of <b>Singapore Management University</b>.
             </p>
             <p>
                 My current research interests primarily includes, <b> Multi-modal sesning for Human-AI Collaboration on pervasive devices with low energy, latency and computational requirements.</b>
             </p>

             <p>
                 Prior to my PhD studies, I completed my <b>Bachelors in Electronics and Telecommunication Engineering</b> from <b>University of Moratuwa, Sri Lanka</b>. Then, I worked at <b>Singapore Management University</b> as a <b>Research Engineer</b>, advised by <b>Prof. Archan Misra</b> for a year.
             </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
                               {street2}
                               {street3}
                               {street4}
						         {city}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
