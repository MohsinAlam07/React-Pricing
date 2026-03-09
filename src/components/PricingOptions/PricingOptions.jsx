import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData=use(pricingPromise);
    // console.log(pricingData)
    return (
        <div className=''>
            <h3 className='text-5xl'>Get Our memberships</h3>
            <div className='grid md:grid-cols-2 gap-8'>
                {/* {
                    pricingData.map(pricing=><PricingCard  pricing={pricing} key={pricing.id}></PricingCard>)

                } */}
                {
                    pricingData.map(pricing=><DaisyPricing pricing={pricing} key={pricing.id}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;