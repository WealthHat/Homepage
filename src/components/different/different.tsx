import React from 'react';
import Heading from '../heading/heading';
import ServiceCard from '@/common/service-card/service-card';
import { offer } from '@/constant/offer';

const Different = () => {
  return (
    <div className='different'>
      <Heading
        title='How we are different'
        subtitle='Delivering for Investors'
        content='WealthHat is the world’s largest alternative asset manager, with $1 trillion. We serve institutional and individual investors by building strong businesses '
      />
      <div className='container different-center'>
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th className='white' scope='col'></th>
                <th scope='col'>WealthHat</th>
                <th className='white' scope='col'>
                  Traditional Firm
                </th>
                <th scope='col'>Traditional Firm</th>
              </tr>
            </thead>

            <tbody>
              {offer?.map((item: any, index: number) => {
                return (
                  <tr className='shaded' key={index}>
                    <td className='white'>{item.name}</td>

                    <td className="check">{item.wealthhat ? <i className="bi bi-check-circle-fill"></i> : ""}</td>

                    <td className='white check'>{item.firstFirm ? <i className="bi bi-check-circle-fill"></i> : ""}</td>
                    <td className="check">{item.secondFirm ? <i className="bi bi-check-circle-fill"></i> : ""}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Different;
