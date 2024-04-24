import React, { FC, useRef } from 'react';
import Image from 'next/image';
import ProductCard from '@/modules/components/RecommendationCard';
import ReviewCard from '@/modules/components/ReviewCard';
import { currencyMapper } from '@/helpers/currencyMapper';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

interface OrderReviewProps {
  products: Products[];
  productRecommendations: ProductRecommendations[];
  deliveryCharge: {
    amount: number;
    currency: string;
  }
}
const image =
  'https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/eb2cb381-18cf-4c30-97ac-b9cae847c835/65d84a759ffb68eec522c916/go_logo.png';
export const OrderReview: FC<OrderReviewProps> = ({
  products, productRecommendations, deliveryCharge
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperButtonPrevRef = useRef<HTMLButtonElement>();
  const swiperButtonNextRef = useRef<HTMLButtonElement>();

  return (
    <div>
      <div className="flex justify-center">
        <Image src={image} alt="image" height="300" width="240" />
      </div>
      <div className="text-gray-500 text-2xl font-bold text-center mb-4">
        Your Order
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-md p-4 md:p-8">
        {products?.map((prd: any, index: number) => (
          <ReviewCard product={prd} key={index + prd.id} />
        ))}

        <div className="flex flex-col">
          <div className="flex justify-between text-l">
            Subtotal:{' '}
            <span className="font-medium">
              {currencyMapper[products?.[0]?.price.currency]}{' '}
              {products
                ?.reduce((acc, prd) => acc + parseFloat(prd.price.amount), 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-l">
            Delivery:{' '}
            <span className="font-medium">
              {currencyMapper[deliveryCharge?.currency]}{' '}
              {products
                ?.reduce(
                  (acc) => acc + parseFloat(deliveryCharge.amount.toString()),
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-l">
            Total:{' '}
            <span className="font-medium">
              {currencyMapper[products?.[0]?.price.currency]}{' '}
              {(
                products?.reduce(
                  (acc, prd) => acc + parseFloat(prd.price.amount),
                  0
                ) + deliveryCharge?.amount
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-center text-gray-500 font-medium text-lg md:text-xl my-8">
        CUSTOMERS ALSO BOUGHT
      </h2>

      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl xl:max-w-4xl mx-auto">
        <button
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            prevEl: swiperButtonPrevRef.current || null,
            nextEl: swiperButtonNextRef.current || null,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 20,
            },
          }}
          slidesOffsetAfter={productRecommendations?.length > 1 ? 24 : 0}
          slidesOffsetBefore={productRecommendations?.length > 1 ? 24 : 0}
          className="!py-4"
        >
          {productRecommendations?.map((prd: any, index: number) => (
            <SwiperSlide key={index + prd.title}>
              <ProductCard product={prd} key={index + prd.id} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
 