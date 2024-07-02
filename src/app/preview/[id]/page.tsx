'use client'
import React, { FC, useState, useEffect } from 'react';
import OrderReview from '@/modules/compositions/OrderReview';
import LoadingIndicator from '@/modules/components/LoadingIndicator';


interface Props {
  params: {
    id: string;
  }
}
interface Data { 
  products: Products[];
  productRecommendations: ProductRecommendations[];
  deliveryCharge: {
    amount: number;
    currency: string;
  }

}

async function getData(orderId: string): Promise<Data | null> {
  const token = process.env.AUTH_TOKEN || '';
  const url = `https://api.qa.primis.cx/tracking/page/${orderId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'the-key',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const {
      order: { products, deliveryCharge },
      campaign: { productRecommendations },
    } = await response.json();

    return { products, deliveryCharge, productRecommendations };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; 
  }
};
           

const Preview: FC<Props> = ({ params }) => {
  const [data, setData] = useState<Data | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(params.id); 
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [params.id]);


   if (!data) {
     return <LoadingIndicator />;
   }


 
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <OrderReview
        products={data?.products}
        productRecommendations={data?.productRecommendations}
        deliveryCharge={data?.deliveryCharge}
      />
    </div>
  );
};

export default Preview;





