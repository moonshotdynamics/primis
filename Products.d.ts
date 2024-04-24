interface Products {
    name: string;
    quantity: number;
    price: {
      currency: string;
      amount: string;
    };
    externalProductId: string;
    productCode: string;
    imageUrl: string;
    productUrl: string;
    _id: string;
    id: string;
    discount: null;
    total: {
      currency: string;
      amount: string;
    };
  };
  

  interface ProductRecommendations {
    _id: string;
    retailerId: string;
    integration: string;
    externalProductId: string;
    status: string;
    name: string;
    price: {
      currency: string;
      amount: string;
    };
    description: string;
    hyperlink: string;
    imageUrl: string;
    variants: {
      id: string;
      imageUrl: string;
      price: {
        currency: string;
        amount: string;
      };
      title: string;
      productCode: string;
    }[];
    source: string;
    colors: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
};

