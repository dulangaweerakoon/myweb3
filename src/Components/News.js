import React, { Component } from 'react';

class News extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
          if (education.prof) {
              return <div key={education.school}><h3>{education.school}</h3>
                  <p className="info">{education.degree} <span>&bull;</span><em
                      className="date">{education.graduated}</em></p>
                  <p className="info"><b>Advised By:</b> {education.prof}</p>
                  <p><b>Research Interests:</b> {education.description}</p></div>
          }
          else{
              return <div key={education.school}><h3>{education.school}</h3>
                  <p className="info">{education.degree} <span>&bull;</span><em
                      className="date">{education.graduated}</em></p>
                  </div>
          }

      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.title}><h3>{work.title}</h3>
            <p className="info">{work.company}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      // var skills = this.props.data.skills.map(function(skills){
      //     return <div>
      //         <p><b>Weerakoon, D.</b>, Subbaraju, V., Karumpulli, N., Tran, T., Xu, Q., Tan, U.X., Lim, J.H. and Misra, A., 2020, October. Gesture enhanced comprehension of ambiguous human-to-robot instructions. In Proceedings of the 2020 International Conference on Multimodal Interaction (pp. 251-259).</p>
      //         <p>dfdf</p>
      //     </div>
        // var className = 'bar-expand '+skills.name.toLowerCase();
        // return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="news">

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Recent Updates</span></h1>
         </div>

         <div className="nine columns main-col">

            {/*<p>Selected Publications*/}
            {/*</p>*/}

				<div className="bars">
				   <ul className="news">
                       <div>
                           <p><b>[June 2022]</b> Our Paper titled, "SoftSkip: Empowering Multi-Modal Dynamic Pruning for Single-Stage Referring Comprehension" was accepted to <b>ACM Multimedia 2022</b> </p>
                           <p><b>[June 2022]</b> Our Paper titled, "COSM2IC: Optimizing Real-time Multi-Modal Instruction Comprehension" was accepted to <b>IROS 2022</b></p>
                           <p><b>[Sept 2020]</b> Our Paper titled, "Gesture enhanced comprehension of ambiguous human-to-robot instructions" was accepted to <b>ICMI 2020</b></p>
                           <p><b>[Sept 2020]</b> Our Paper titled, "Five Challenges in Cloud-Enabled Intelligence and Control" was accepted to <b>ACM Trans. on Internet Technology</b></p>
                       </div>
					</ul>
				</div>
			</div>
      </div>

   </section>
    );
  }
}

export default News;
