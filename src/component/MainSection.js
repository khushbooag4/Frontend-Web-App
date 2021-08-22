import React from 'react';
import { Row,Col,Button} from 'antd';
import '../App.css'

function MainSection() {
    const handleClick = () => {
         console.log('Button Clicked')
    };
    return (
        <div>
            <div className="main">
     <div className = "container">
        <div className="subtext ">
            <p>YOUR TIME, OUR EFFORTS</p>
            <h1>Pay After Job Full Stack 
                Development Course</h1>
        </div>
        <div className="button">
            <button className="btn">KNOW MORE</button>
        </div>
    </div>
        </div>
        <div className="blue-main">
              <h3 className="blue-main-subtext">NEXT BATCH: 1st Sept. | <span> Apply Now</span></h3>
        </div>
        <div className = "container">
          <div className = "content ">
            <div className ="section grid">
                <div>
                    <img src="/Images/img1.jpg"  alt=" " />
                </div>
                <div className="details">
                    <h4>HICODER</h4>
                    <h1 className="heading1">We help students learn <br />  
                    <span>Full Stack Development.</span></h1>
                    
                    <div className="detail-sub">
                        <p>HiCoder does everything that helps students become successful in the
                           software industry. From product thinking to product designing, system
                           designing, choosing the right frameworks, breaking projects in stages to
                           building teams, and working collaboratively to making the application
                           comply with the latest Google SEO needs and knowledge about
                           integrated analytics, we do everything in between.</p>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="content">
                <Row justify={'space-around'}>
                    <Col span={12}>
                        <h1>Trained on the most in-demand Technology Skills</h1>
                        <p>At the end of the course, every student becomes capable to develop
                           their own create a web application, host on their own domain, enable
                           advanced technologies and observe people's actions on their website and
                           represent themselves as a HiCoder that matters.</p>
                        <div className="list">
                           <ul>
                               <li>End to End Project Analysis, Design & Development</li>
                               <li>Authentication, Geo Tracking, Payment Gateway</li>
                               <li>Analytics, SEO, Data Representation, Industry Standards</li>
                               <li>Max Pro Resume, Soft Skills, Client Expectation Management</li>
                           </ul>
                        </div>
                        <Button>Apply Now</Button>
                    </Col>
                    <Col span={12}>
                        <img src='/Images/img2.jpg' alt=""/>
                    </Col>
                </Row>
            </div>
        </div>
         <div className="stats">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  justify="space-around" align="middle">
                 <Col span={6} className="data">
                     <img src="/Images/1.png" />
                     <h1>34 +</h1>
                     <h4>PROJECTS COMPLETED</h4>
                 </Col>
                 <Col span={6} className="data">
                     <img src="/Images/2.png" />
                     <h1>47 +</h1>
                     <h4>INDUSTRY EXPERTS</h4>
                 </Col>
                 <Col span={6} className="data">
                     <img src="/Images/3.png" />
                     <h1>30 +</h1>
                     <h4>QUALITY DEVELOPERS</h4>
                     </Col>
                <Col span={6} className="data">
                     <img src="/Images/4.png" />
                     <h1>40,000,00 +</h1>
                     <h4>APPLICATION USERS</h4>
                </Col>
             </Row>
        
      </div>
            <Row className="section" gutter="" justify="space-around" align="middle">
                <Col span={12}>
                <h1>Why HiCoder?</h1>
                <p>HiCoder enables students to think about real-world problems, design,
                   and develop the right solution.<a>know more</a></p>
                <Row justify="space-around" align="middle">
                <Col span={12}><img src="/Images/One.png" alt="" />
                </Col>
                <Col span={12}><h2>Personalized Training</h2>
                <p>We understand the weakness of students coming from
                   poor educational backgrounds. HiCoder avails resources
                   and extra after-class support to match the criteria
                   and keep up with tech.</p></Col>
                <Col span={12}><img src="/Images/Two.png" alt="" />
                </Col>
                <Col span={12}><h2>Production Projects</h2>
                <p>Every student ends up making around 3 projects that are
                   wholesome, cloud-hosted and can be used for a
                   commercial purpose.</p></Col>
                </Row>
                </Col>
                <Col span={12}>
                <img className="img" src="/Images/right-img.jpg" alt="" /></Col>
            </Row>
             
            <Row gutter="" justify="space-around" align="middle">
               <Col span={12}>
                <img className="img"  src="/Images/img3.jpg" alt="" /></Col>
                <Col span={12}>
                <h1>How does HiCoder help?</h1>
                <p className="para1">HiCoder resembeles software development and marketing altogether
                 to develop applications that can be used by real user than keeping on
                 Github.<a>know more</a></p>
                
                
                <p className="para2">HiCoder understands the struggle, peer pressure an engineering student
                 goes into throughout curriculum. We believe, Most engineering students
                 who can be part of the core software industry end up having a tech
                 support or customer care job just because college never taught
                 trending technology, project Management or encouraged students to
                 their own projects.</p>
                 
                 <Button className="btn">KNOW MORE</Button>
                 </Col>
            </Row>
        </div>
        

    )
}

export default MainSection
