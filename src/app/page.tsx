
import Banner from '@/component/Banner';
import LibrarySection from '@/component/LibrarySection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "FitLog",
  description: "FitLog",
};
const page = () => {
  return (
    <div>
      <Banner></Banner>
      <div id='library'>
        <LibrarySection ></LibrarySection>
      </div>
    </div>
  );
};

export default page;