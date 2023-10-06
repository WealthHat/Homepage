import Layout from '@/components/Layout';
import Marker from '@/svgs/marker';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <Layout>
      <div className='about-us'>
        <div className='about-hero'>
          <div className='container-fluid'>
            <h1>About Us</h1>
            <p>
              Private Wealth Solutions’ mission is to deliver innovative
              solutions with exceptional service to advisors and their clients.
              We are committed to helping more investors unlock differentiated
              opportunities beyond traditional asset classes.
            </p>
          </div>
        </div>

        <div className='who-we-are'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 left'>
                <h3>Who we are</h3>
              </div>

              <div className='col-lg-7 right'>
                <p>
                  Driving capital to the world’s most impactful and compelling
                  investments, leveraging our combination of talent, technology,
                  analytics and global scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='experience'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 left'>
                <h3>A Firm with</h3>

                <div className='d-flex align-items-center gap-3'>
                  <i className='mt-3 bi bi-dash-lg'></i>
                  <h3>experience</h3>
                </div>
                <h3>and vision</h3>
              </div>

              <div className='col-lg-6 right'>
                <p>
                  We see ourselves as a forward looking group of passionate
                  property professionals with the relevant experience to match.
                  With varied backgrounds in construction, investment and
                  development we have entrepreneurialism in our hearts and risk
                  awareness in our heads.
                </p>
                <p>
                  We see ourselves as a forward looking group of passionate
                  property professionals with the relevant experience to match.
                  With varied backgrounds in construction, investment and
                  development we have entrepreneurialism in our hearts and risk
                  awareness in our heads.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='expertise'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 left'>
               <div>
                 <div className="d-flex align-items-end">
                  <h3>Our Expertise</h3>
                   <i className='mt-3 bi bi-dash-lg'></i>
                 </div>
                <p>
                  We see ourselves as a forward looking group of passionate
                  property professionals with the relevant experience to match.
                  With varied backgrounds in construction, investment and
                  development we have entrepreneurialism in our hearts and risk
                  awareness in our heads.
                </p>
                <p>
                  We see ourselves as a forward looking group of passionate
                  property professionals with the relevant experience to match.
                  With varied backgrounds in construction, investment and
                  development we have entrepreneurialism in our hearts and risk
                  awareness in our heads.
                </p>
               </div>
              </div>

              <div className='col-lg-6 right'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
