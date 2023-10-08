import React from 'react';
import Layout from '@/components/Layout';
import Heading from '@/components/heading/heading';
import ClientCard from '@/common/client-card/client-card';

const OurClients = () => {
  return (
    <Layout>
      <div className='our-clients'>
        <div className='client-hero'>
          <div className='container-fluid'>
            <h1>Our Clients</h1>
            <p>
              Private Wealth Solutions’ mission is to deliver innovative
              solutions with exceptional service to advisors and their clients.
              We are committed to helping more investors unlock differentiated
              opportunities beyond traditional asset classes.
            </p>
          </div>
        </div>

        <div className='private'>
          <div className='container'>
            <h1>Private Wealth</h1>
            <p>
              Managing a fortune, balancing the needs of a family and a business
              and maintaining a positive outward image is not always easy to do.
            </p>
            <p>
              As the boundaries between personal life and business life continue
              to overlap, increasingly over many jurisdictions, we assist
              clients in their personal lives and in their roles as trustees,
              directors, managers and owners of land or business.
            </p>
            <p>
              Many families have remained our clients through several
              generations and as such we have become experts in advising
              individuals, family offices and their businesses. Our advice
              covers all aspects of personal and corporate tax, family and
              corporate governance, immigration, residential property and family
              and divorce issues. We are pleased to be recognised as experts in
              our fields.
            </p>
            <p>
              Our years of experience mean we are well-equipped to help UK and
              international clients throughout all the key decision-making
              stages of their life, and this includes resolving difficult family
              arguments. As well as a leading tax team, we are one of the few
              firms to offer market- leading advice when trusts or probate
              issues become contentious.
            </p>
            <p>
              The focus for us has, and always will be, to provide clear and
              pragmatic advice that factors in the fast pace of change in the
              world of private wealth.
            </p>
          </div>
        </div>

        <div className='client-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 client-box'>
                <ClientCard
                  title='Families & Family Offices'
                  content='Our clients always come first. We serve them through a global network powered by partnership, integrity, We serve them through a global network powered by partnership, integrity, '
                  color='light'
                />
              </div>
              <div className='col-lg-4 col-md-6 client-box'>
                <ClientCard
                  title='Families & Family Offices'
                  content='Our clients always come first. We serve them through a global network powered by partnership, integrity, We serve them through a global network powered by partnership, integrity, '
                  color='dark'
                />
              </div>
              <div className='col-lg-4 col-md-6 client-box'>
                <ClientCard
                  title='Families & Family Offices'
                  content='Our clients always come first. We serve them through a global network powered by partnership, integrity, We serve them through a global network powered by partnership, integrity, '
                  color='light'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-6 client-box'>
                <ClientCard
                  title='Families & Family Offices'
                  content='Our clients always come first. We serve them through a global network powered by partnership, integrity, We serve them through a global network powered by partnership, integrity, '
                  color='dark'
                />
              </div>
              <div className='col-lg-4 col-md-6 client-box'>
                <ClientCard
                  title='Families & Family Offices'
                  content='Our clients always come first. We serve them through a global network powered by partnership, integrity, We serve them through a global network powered by partnership, integrity, '
                  color='light'
                />
              </div>
              <div className='col-lg-4 col-md-6 client-box'>
                <ClientCard
                  title='Families & Family Offices'
                  content='Our clients always come first. We serve them through a global network powered by partnership, integrity, We serve them through a global network powered by partnership, integrity, '
                  color='dark'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurClients;
