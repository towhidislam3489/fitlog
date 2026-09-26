import PlanTopCard from '@/component/PlanTopCard';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "My Plan",
  description: "My Plan",
};
const page = () => {
    return (
        <div>
            <PlanTopCard></PlanTopCard>
        </div>
    );
};

export default page;