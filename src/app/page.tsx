'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toastError } from '@/utils/toasts';

const HeroSection = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState('');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrderId(e.target?.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (/^[0-9a-fA-F]{24}$/.test(orderId)) {
        router.push(`/preview/${orderId}`);
      } else {
        toastError('Please enter a valid order ID.');
      }
    };
  return (
    <div className="flex flex-col md:flex-row items-center relative md:relative w-full h-full">
      <div
        className="md:w-1/2 h-screen  items-center justify-center text-white p-8 md:flex hidden w-full bg-gradient-to-r from-orange to-gray-500"
      >
        <form
          className="space-y-4 text-center md:text-left flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h1
            className="text-4xl font-bold md:text-7xl text-white"
          >
            Review Your Order
          </h1>
          <p className="text-xl text-white">
            Enter your order ID and get started
          </p>
          <input
            type="text"
            value={orderId}
            onChange={handleInputChange}
            className="rounded-md text-gray-700 p-2"
          />

          <button
            type="submit"
            className="px-6 py-2 rounded-md shadow transition hover:bg-white bg-orange text-white hover:text-orange"
          >
            View Order
          </button>
        </form>
      </div>
      <div className="relative md:w-1/2 h-screen md:h-screen w-full">
        <Image
          src="https://source.unsplash.com/hTUZW7E7krg"
          alt="landing image"
          fill={true}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="md:hidden absolute inset-0 flex flex-col items-center mt-[50%] text-white p-8">
          <form
            className="space-y-4 text-center flex flex-col"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-bold text-white">
              Review Your Order
            </h1>
            <p className="text-xl text-white">
              {' '}
              Enter your order ID and get started
            </p>
            <input
              type="text"
              value={orderId}
              onChange={handleInputChange}
              className="rounded-md text-gray-700 p-2"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md shadow transition hover:bg-white bg-orange text-white hover:text-orange"
            >
              View Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
