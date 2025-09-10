import React from 'react';
import PaymentPage from '@/components/PaymentPage';

const Username = async ({ params }) => {
  const { username } = await params;

  return <PaymentPage username={username} />;
};

export default Username;

export async function generateMetadata({ params}) {
  return {
    title:`Support ${params.username}-Get me a chai`
  }
}
 