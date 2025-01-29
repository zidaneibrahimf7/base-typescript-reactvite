type DestinationConfig = {
  [key: string]: {
    [key: string]: {
      action: string;
      subAction: string;
    };
  };
};

export const destination: DestinationConfig = {
     dummyJson: {
          login: { action: 'auth', subAction: 'login' },
          products: {action: 'products', subAction: ''},
          carts: {action: 'carts', subAction: ''},
     },
}