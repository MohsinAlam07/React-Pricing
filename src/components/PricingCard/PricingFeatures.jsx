import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <div className='gap-2'>
            <p className='flex  mt-4'><CircleCheck></CircleCheck> {feature}</p>
        </div>
    );
};

export default PricingFeatures;