import React, { FC } from 'react';
import Image from 'next/image';
import { currencyMapper } from '@/helpers/currencyMapper';
import { useRouter } from 'next/navigation';


interface Props {
  product: ProductRecommendations;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const router = useRouter();

  return (
    <div className=" flex flex-col justify-between rounded-md bg-white p-5 shadow-md w-[300px] hover:cursor-pointer hover:shadow-lg" onClick={() => router.push(product.hyperlink)}>
      <div className="flex-1 flex justify-center">
        <Image
          src={product.imageUrl}
          alt="recommended product image"
          width="100"
          height="100"
          priority
          className="mb-6"
        />
      </div>
      <div className="text-gray-600 text-sm mb-6">{product.name}</div>
      <div className="text-gray-400 text-xs">
        {currencyMapper[product.price.currency]} {product.price.amount}
      </div>
    </div>
  );
};

export default ProductCard;