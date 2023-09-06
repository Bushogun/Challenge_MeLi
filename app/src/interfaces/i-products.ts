export interface IProduct {
    id: string;
    title: string;
    price: number;
    installments: Installments;
    address: Address;
    thumbnail: string;
    condition: string;
    shipping: Shipping
}
export interface Shipping {
    free_shipping: boolean;
}

export interface Installments {
    quantity:    number;
    amount:      number;
}

export interface Address {
    state_name: string;
    city_name:  string;
}