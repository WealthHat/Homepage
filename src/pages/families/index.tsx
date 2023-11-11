import React from 'react';
import Layout from '@/components/Layout';
import Heading from '@/components/heading/heading';

const Families = () => {
  return (
    <Layout>
      <div className='ultra-high'>
        <div className='ultra-high-hero'>
          <div className='container-fluid'>
            <h1>Families & Spouses</h1>
            <p>
              Private Wealth Solutions’ mission is to deliver innovative
              solutions with exceptional service to advisors and their clients.
              We are committed to helping more investors unlock differentiated
              opportunities beyond traditional asset classes.
            </p>
          </div>
        </div>

        <div className='our-investment'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 left'>
                <div>
                  <h2>Our Investment</h2>
                  <div className='d-flex align-items-end'>
                    <h2>Philosophy</h2>
                    <div className='dash'></div>
                  </div>
                </div>
              </div>

              <div className='col-lg-7 right'>
                <div>
                  <p>Our investment philosophy is rooted in the belief that:</p>
                  <ul>
                    <li>
                      Robust portfolio construction includes diversification by
                      asset class, style and geography.
                    </li>
                    <li>
                      Rigorous risk management is key to wealth preservation.
                    </li>
                    <li>
                      Rigorous risk management is key to wealth preservation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sustainable'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 left'>
                <div>
                  <div className='d-flex align-items-end'>
                    <h3>Sustainable Investment</h3>
                    <i className='mt-3 bi bi-dash-lg'></i>
                  </div>
                  <p>
                    We see ourselves as a forward looking group of passionate
                    property professionals with the relevant experience to
                    match. With varied backgrounds in construction, investment
                    and development we have entrepreneurialism in our hearts and
                    risk awareness in our heads.
                  </p>
                  <p>
                    We see ourselves as a forward looking group of passionate
                    property professionals with the relevant experience to
                    match. With varied backgrounds in construction, investment
                    and development we have entrepreneurialism in our hearts and
                    risk awareness in our heads.
                  </p>
                </div>
              </div>

              <div className='col-lg-6 right'></div>
            </div>
          </div>
        </div>

        <div className='opportunities'>
          <div className='container'>
            <div className='opportunity d-flex align-items-end'>
              <h3>Sustainable Investment</h3>
              <div className='dash'></div>
            </div>

            <h1>
              Simplifying Your Financial Life with Wealth Planning Services
            </h1>

            <hr />

            <ul
              className='accordion accordion-flush'
              id='accordionFlushExample'
            >
              <li className='accordion-item'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseOne'
                >
                  Identifying Strategies to Enhance Portfolios
                  
                </button>

                <div
                  id='flush-collapseOne'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionFlushExample'
                >
                  <div className='accordion-body'>

                  <p>
                    The Portfolio Construction team collaborates with the Wealth
                    Planning, Investment Strategy, Manager Research and Private
                    Investments teams to build a diversified portfolio that
                    aligns with your financial plan and your ability and
                    willingness to take risk — and one that is sensitive to tax,
                    cost and liquidity factors.
                  </p>
                  </div>
                </div>
              </li>

              <li className='accordion-item'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseTwo'
                >
                  Portfolio Construction: Aligning with Your Needs
                  
                </button>

                <div
                  id='flush-collapseTwo'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionFlushExample'
                >
                  <div className='accordion-body'>

                  <p>
                    The Portfolio Construction team collaborates with the Wealth
                    Planning, Investment Strategy, Manager Research and Private
                    Investments teams to build a diversified portfolio that
                    aligns with your financial plan and your ability and
                    willingness to take risk — and one that is sensitive to tax,
                    cost and liquidity factors.
                  </p>
                  </div>
                </div>
              </li>

              <li className='accordion-item'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseThree'
                >
                  Identifying Strategies to Enhance Portfolios
                  
                </button>

                <div
                  id='flush-collapseThree'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionFlushExample'
                >
                  <div className='accordion-body'>

                  <p>
                    The Portfolio Construction team collaborates with the Wealth
                    Planning, Investment Strategy, Manager Research and Private
                    Investments teams to build a diversified portfolio that
                    aligns with your financial plan and your ability and
                    willingness to take risk — and one that is sensitive to tax,
                    cost and liquidity factors.
                  </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Families;
