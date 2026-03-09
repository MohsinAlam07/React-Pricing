import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    const {name,price,duration,information,features}=pricing;
    return (
        <div className='flex flex-col border bg-amber-500 rounded-xl p-6'>
            {/* card head */}
            <div >
                <h1 className="text-7xl">{name}</h1>
                <h3 className='text-3xl'>{price}</h3> <p className='bg-white rounded text-black mt-2'>{duration}</p>
                {/* <p>{pricing.features}</p> */}
            </div>
            {/* card body */}
            <div className='flex-1 '>
                <p>{information}</p>
                {
                    features.map((feature,index)=><PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }

            </div>
            <button className="btn w-full mt-4">Subsribe Now</button>
            
        </div>
    );
};

export default PricingCard;