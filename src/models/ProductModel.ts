/* eslint-disable camelcase */
interface ProductModel {
    product: {
        name: string,
        tags: string[],
        options: {
        [x: string]: Option,
        '1080p': Option,
        '4k': Option,
        'batterry_accesories': Option,
        }
        discount: Discount,
        gallery: Gallery[],
        shipping: {
            method: ShippingMethod,
            lead_time: LeadTime,
            props: ShippingProps,
        },
        reviews: Review
    }
}

interface Gallery {
    main: string,
}
interface ShippingProps{
    ready_to_ship: boolean,
    in_stock: boolean,
    fast_dispatch: boolean,
}

interface LeadTime {
value: string,
info: string,
}

interface ShippingMethod {
country:string,
title:string,
shipping_time: ShippingTime,
cost: Price,
}

interface ShippingTime{
    value:string,
    info:string,
}

interface Review {
    rating: number,
    count: number,
    total_buyers: number,
}

interface Discount {
    amount: string,
    end_date: string,
}

interface Option {
        label: string,
        price: Price,
        old_price:any
}

interface Price{
    value: number,
    currency: Currency,
}

interface Currency{
    code: string,
    symbol: string,
    format: string,
}
export default ProductModel;
