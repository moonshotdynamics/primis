import React, { FC } from 'react';
import Image from 'next/image';
import { currencyMapper } from '@/helpers/currencyMapper';

interface Props  {
  product: Products;
}

export const ReviewCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex p-4 border-b-2 ">
      <div className="w-24 h-24 relative mr-4">
        <Image
          src={product.imageUrl}
          alt="product-image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
        <p className="text-lg font-semibold">
          {currencyMapper[product.price.currency]}
          {product.price.amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
