import React, { Component } from 'react';

class Resume extends Component {
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
      <section id="resume">

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Publications</span></h1>
         </div>

         <div className="nine columns main-col">

            {/*<p>Selected Publications*/}
            {/*</p>*/}

				<div className="bars">
				   <ul className="skills">
                       <div>
                           <p><b>Weerakoon, D.</b>, Subbaraju, V., Tran, T., and Misra, A., 2022. SoftSkip: Empowering Multi-Modal Dynamic Pruning for Single-Stage Referring Comprehension. In ACM Multimedia 2022 [Accepted].</p>
                           <p><b>Weerakoon, D.</b>, Subbaraju, V., Tran, T., and Misra, A., 2022. COSM2IC: Optimizing Real-time Multi-Modal Instruction Comprehension. In IEEE/RSJ Internation Conference on Intelligent Robots and Systems (IROS 2022)  [Accepted].</p>
                           <p><b>Weerakoon, D.</b>, Subbaraju, V., Karumpulli, N., Tran, T., Xu, Q., Tan, U.X., Lim, J.H. and Misra, A., 2020, October. Gesture enhanced comprehension of ambiguous human-to-robot instructions. In Proceedings of the 2020 International Conference on Multimodal Interaction (pp. 251-259).</p>
                           <p>Abdelzaher, T., Hao, Y., Jayarajah, K., Misra, A., Skarin, P., Yao, S., <b>Weerakoon, D. </b>and Årzén, K.E., 2020. Five challenges in cloud-enabled intelligence and control. ACM Transactions on Internet Technology (TOIT), 20(1), pp.1-19.</p>
                           <p>Yao, S., Hao, Y., Zhao, Y., Piao, A., Shao, H., Liu, D., Liu, S., Hu, S., <b>Weerakoon, D.</b>, Jayarajah, K. and Misra, A., 2019, July. Eugene: Towards deep intelligence as a service. In 2019 IEEE 39th International Conference on Distributed Computing Systems (ICDCS) (pp. 1630-1640). IEEE.</p>
                           <p><b>Weerakoon, D.</b>, Jayarajah, K., Tandriansyah, R. and Misra, A., 2019, July. Resilient Collaborative Intelligence for Adversarial IoT Environments. In 2019 22th International Conference on Information Fusion (FUSION) (pp. 1-8). IEEE.</p>
                           <p>Misra, A., Jayarajah, K., <b>Weerakoon, D.</b>, Tandriansyah, R., Yao, S. and Abdelzaher, T., 2019, May. Dependable machine intelligence at the tactical edge. In Artificial Intelligence and Machine Learning for Multi-Domain Operations Applications (Vol. 11006, p. 1100608). International Society for Optics and Photonics.</p>
                           <p>Misra, A., <b>Weerakoon, D.</b> and Jayarajah, K., 2019, April. The challenge of collaborative iot-based inferencing in adversarial settings. In IEEE INFOCOM 2019-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS) (pp. 1-6). IEEE.</p>
                           <p>Jayarajah, K., Subbaraju, V., <b>Weerakoon, D.</b>, Misra, A. and Athaide, N., 2017, May. Discovering anomalous events from urban informatics data. In Ground/Air Multisensor Interoperability, Integration, and Networking for Persistent ISR VIII (Vol. 10190, p. 101900F). International Society for Optics and Photonics.</p>
                       </div>
					</ul>
				</div>
			</div>
      </div>
          <div className="row education">
              <div className="three columns header-col">
                  <h1><span>Education</span></h1>
              </div>

              <div className="nine columns main-col">
                  <div className="row item">
                      <div className="twelve columns">
                          {education}
                      </div>
                  </div>
              </div>
          </div>


          <div className="row work">

              <div className="three columns header-col">
                  <h1><span>Work Experience</span></h1>
              </div>

              <div className="nine columns main-col">
                  {work}
              </div>
          </div>
   </section>
    );
  }
}

export default Resume;
