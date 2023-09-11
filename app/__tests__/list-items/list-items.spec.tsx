import React from 'react';
import { renderWithProviders } from '@/src/utils/test-utils';
import { ListItems } from '@/src/components/list-items/list-product-items';

describe('ListItems component', () => {

  it('should render correctly', () => {
    const { getByText } = renderWithProviders(<ListItems />)
    expect(getByText).toMatchSnapshot();
    products.forEach((product) => {
      expect(getByText(product.title)).toBeInTheDocument();
    });
    
    });


//   it('should not render when no products are available', () => {
//     const { container } = renderWithProviders(<ListItems />, {
//       product: { products: [], itemsPerPage: 10 }, // Configura el estado de Redux necesario para la prueba
//     });

//     expect(container).toBeEmptyDOMElement();
//   });

});

const products = [
    {
        "site_id": "MLA",
        "country_default_time_zone": "GMT-03:00",
        "query": "iphone",
        "paging": {
            "total": 10246,
            "primary_results": 1000,
            "offset": 0,
            "limit": 10
        },
        "results": [
            {
                "id": "MLA1437437864",
                "title": "Apple iPhone 13 (128 Gb) - Azul",
                "condition": "new",
                "thumbnail_id": "619667-MLA47781882790_102021",
                "catalog_product_id": "MLA18500846",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-13-128-gb-azul/p/MLA18500846",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
                "currency_id": "ARS",
                "order_backend": 1,
                "price": 700000,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 3,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "good_quality_thumbnail",
                    "immediate_payment",
                    "cart_eligible",
                    "best_seller_candidate"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-06-18T04:00:00.000Z",
                "seller": {
                    "id": 196230127,
                    "nickname": "CELECTROSHOP S.A.S",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2015-11-02T23:39:12.000-04:00",
                    "tags": [
                        "normal",
                        "eshop",
                        "mshops",
                        "credits_profile",
                        "credits_active_borrower",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/NEW+BITECH",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 320,
                            "completed": 3766,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.02,
                                "neutral": 0.03,
                                "positive": 0.95
                            },
                            "total": 4086
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 1497
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0043,
                                "value": 7
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0006,
                                "value": 1
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0012,
                                "value": 2
                            }
                        }
                    },
                    "eshop": {
                        "eshop_id": 398481,
                        "seller": 196230127,
                        "nick_name": "CELECTROSHOP S.A.S",
                        "eshop_status_id": 1,
                        "site_id": "MLA",
                        "eshop_experience": 0,
                        "eshop_rubro": null,
                        "eshop_locations": [],
                        "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/logo-196230127-1690378745021.jpeg"
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": "TUxBQkNPTDI3NDNa",
                        "name": "Colegiales"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": "TUxBQkNPTDI3NDNa",
                    "city_name": "Colegiales"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "DETAILED_MODEL",
                        "name": "Modelo detallado",
                        "value_id": "22787241",
                        "value_name": "MLPK3BR/A",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "22787241",
                                "name": "MLPK3BR/A",
                                "struct": null,
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "7741027",
                        "value_name": "Apple GPU",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7741027",
                                "name": "Apple GPU",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 3045741222775799
                            }
                        ],
                        "source": 3045741222775799,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "11159139",
                        "value_name": "iPhone 13",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11159139",
                                "name": "iPhone 13",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "11151775",
                        "value_name": "Apple A15 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11151775",
                                "name": "Apple A15 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "462013",
                        "value_name": "173 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 173,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "462013",
                                "name": "173 g",
                                "struct": {
                                    "unit": "g",
                                    "number": 173
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 131600,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1356411952",
                "title": "Apple iPhone 11 (128 Gb) - Negro",
                "condition": "new",
                "thumbnail_id": "842272-MLA52993977355_122022",
                "catalog_product_id": "MLA15149567",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-11-128-gb-negro/p/MLA15149567",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_842272-MLA52993977355_122022-I.jpg",
                "currency_id": "ARS",
                "order_backend": 2,
                "price": 506499,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 100,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "good_quality_thumbnail",
                    "immediate_payment",
                    "cart_eligible",
                    "best_seller_candidate"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-02-19T04:00:00.000Z",
                "seller": {
                    "id": 419467681,
                    "nickname": "MOTEC_ELECTRONICA_AR",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2019-03-24T00:28:54.000-04:00",
                    "tags": [
                        "normal",
                        "from_facebook",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MOTEC_ELECTRONICA_AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 136,
                            "completed": 1505,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.05,
                                "neutral": 0,
                                "positive": 0.95
                            },
                            "total": 1641
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 495
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0037,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0164,
                                "value": 8
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0018,
                                "value": 1
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "PALERMO"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "PALERMO"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "7740544",
                        "value_name": "Apple GPU MP4",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7740544",
                                "name": "Apple GPU MP4",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 6808261514773724
                            }
                        ],
                        "source": 6808261514773724,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "7739079",
                        "value_name": "iPhone 11",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7739079",
                                "name": "iPhone 11",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "7740540",
                        "value_name": "Apple A13 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7740540",
                                "name": "Apple A13 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "2583040",
                        "value_name": "194 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 194,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "2583040",
                                "name": "194 g",
                                "struct": {
                                    "number": 194,
                                    "unit": "g"
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 95221.81,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1502468518",
                "title": "Apple iPhone 11 (64 Gb) - Negro",
                "condition": "new",
                "thumbnail_id": "656548-MLA46114829749_052021",
                "catalog_product_id": "MLA15149561",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-11-64-gb-negro/p/MLA15149561",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
                "currency_id": "ARS",
                "order_backend": 3,
                "price": 465840,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 0,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "good_quality_thumbnail",
                    "extended_warranty_eligible",
                    "immediate_payment",
                    "cart_eligible",
                    "best_seller_candidate",
                    "shipping_guaranteed"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-09-03T04:00:00.000Z",
                "seller": {
                    "id": 355435744,
                    "nickname": "MUNDOOBD",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2018-09-18T09:18:16.000-04:00",
                    "tags": [
                        "normal",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MUNDOOBD",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": null,
                        "transactions": {
                            "canceled": 20,
                            "completed": 141,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.04,
                                "neutral": 0,
                                "positive": 0.96
                            },
                            "total": 161
                        },
                        "metrics": {
                            "sales": {
                                "period": "365 days",
                                "completed": 141
                            },
                            "claims": {
                                "period": "365 days",
                                "rate": 0.0124,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "365 days",
                                "rate": 0.0268,
                                "value": 4
                            },
                            "cancellations": {
                                "period": "365 days",
                                "rate": 0,
                                "value": 0
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-B",
                        "name": "Buenos Aires"
                    },
                    "city": {
                        "id": "TUxBQ1FVSWI1MzY",
                        "name": "Quilmes"
                    }
                },
                "address": {
                    "state_id": "AR-B",
                    "state_name": "Buenos Aires",
                    "city_id": "TUxBQ1FVSWI1MzY",
                    "city_name": "Quilmes"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "7740544",
                        "value_name": "Apple GPU MP4",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7740544",
                                "name": "Apple GPU MP4",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 7092
                            }
                        ],
                        "source": 7092,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "7739079",
                        "value_name": "iPhone 11",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7739079",
                                "name": "iPhone 11",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "7740540",
                        "value_name": "Apple A13 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7740540",
                                "name": "Apple A13 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "2583040",
                        "value_name": "194 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 194,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "2583040",
                                "name": "194 g",
                                "struct": {
                                    "number": 194,
                                    "unit": "g"
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 87577.92,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1357319640",
                "title": "Apple iPhone 14 (128 Gb) - Medianoche",
                "condition": "new",
                "thumbnail_id": "881016-MLM51559383738_092022",
                "catalog_product_id": "MLA19615360",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-14-128-gb-medianoche/p/MLA19615360",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_881016-MLM51559383738_092022-I.jpg",
                "currency_id": "ARS",
                "order_backend": 4,
                "price": 793499,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 5,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "good_quality_thumbnail",
                    "immediate_payment",
                    "cart_eligible",
                    "best_seller_candidate"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-02-19T04:00:00.000Z",
                "seller": {
                    "id": 419467681,
                    "nickname": "MOTEC_ELECTRONICA_AR",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2019-03-24T00:28:54.000-04:00",
                    "tags": [
                        "normal",
                        "from_facebook",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MOTEC_ELECTRONICA_AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 136,
                            "completed": 1505,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.05,
                                "neutral": 0,
                                "positive": 0.95
                            },
                            "total": 1641
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 495
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0037,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0164,
                                "value": 8
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0018,
                                "value": 1
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "PALERMO"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "PALERMO"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 6808261514773724
                            }
                        ],
                        "source": 6808261514773724,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "13188538",
                        "value_name": "iPhone 14",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "13188538",
                                "name": "iPhone 14",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "11151775",
                        "value_name": "Apple A15 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11151775",
                                "name": "Apple A15 Bionic",
                                "struct": null,
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "6780742",
                        "value_name": "172 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 172,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "6780742",
                                "name": "172 g",
                                "struct": {
                                    "unit": "g",
                                    "number": 172
                                },
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 149177.81,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1474383632",
                "title": " iPhone 6s 32 Gb  Gris Espacial",
                "condition": "new",
                "thumbnail_id": "898290-MLA31003118647_062019",
                "catalog_product_id": "MLA6282512",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/iphone-6s-32-gb-gris-espacial/p/MLA6282512",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_898290-MLA31003118647_062019-I.jpg",
                "currency_id": "ARS",
                "order_backend": 5,
                "price": 159999,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 5,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "good_quality_thumbnail",
                    "moderation_penalty",
                    "immediate_payment",
                    "cart_eligible",
                    "shipping_guaranteed"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "cross_docking",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-08-12T04:00:00.000Z",
                "seller": {
                    "id": 75279749,
                    "nickname": "MADISON_TECNO",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2004-08-26T16:31:07.000-04:00",
                    "tags": [
                        "normal",
                        "eshop",
                        "mshops",
                        "credits_profile",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MADISON_TECNO",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 1053,
                            "completed": 12403,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.07,
                                "neutral": 0.02,
                                "positive": 0.91
                            },
                            "total": 13456
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 1987
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0074,
                                "value": 16
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.014,
                                "value": 26
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0042,
                                "value": 9
                            }
                        }
                    },
                    "eshop": {
                        "eshop_id": 374156,
                        "seller": 75279749,
                        "nick_name": "MADISON_TECNO",
                        "eshop_status_id": 1,
                        "site_id": "MLA",
                        "eshop_experience": 0,
                        "eshop_rubro": null,
                        "eshop_locations": [],
                        "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/75279749v9c0d0b.png"
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": "TUxBQlZJTDcwOTla",
                        "name": "Villa Urquiza"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": "TUxBQlZJTDcwOTla",
                    "city_name": "Villa Urquiza"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "8094621",
                        "value_name": "PowerVR GT7600",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "8094621",
                                "name": "PowerVR GT7600",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 3045741222775799
                            }
                        ],
                        "source": 3045741222775799,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "312151",
                        "value_name": "iPhone 6s",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "312151",
                                "name": "iPhone 6s",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "6973026",
                        "value_name": "Apple A9",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "6973026",
                                "name": "Apple A9",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "522899",
                        "value_name": "143 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 143,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "522899",
                                "name": "143 g",
                                "struct": {
                                    "number": 143,
                                    "unit": "g"
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 30079.81,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1363420811",
                "title": "Apple iPhone 14 Pro (256 Gb) - Negro Espacial",
                "condition": "new",
                "thumbnail_id": "913741-MLM51559386469_092022",
                "catalog_product_id": "MLA19615357",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-14-pro-256-gb-negro-espacial/p/MLA19615357",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_913741-MLM51559386469_092022-I.jpg",
                "currency_id": "ARS",
                "order_backend": 6,
                "price": 1198019,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 5,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "immediate_payment",
                    "cart_eligible",
                    "best_seller_candidate"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-03-17T04:00:00.000Z",
                "seller": {
                    "id": 419467681,
                    "nickname": "MOTEC_ELECTRONICA_AR",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2019-03-24T00:28:54.000-04:00",
                    "tags": [
                        "normal",
                        "from_facebook",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MOTEC_ELECTRONICA_AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 136,
                            "completed": 1505,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.05,
                                "neutral": 0,
                                "positive": 0.95
                            },
                            "total": 1641
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 495
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0037,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0164,
                                "value": 8
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0018,
                                "value": 1
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "PALERMO"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "PALERMO"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 2860837171021627
                            }
                        ],
                        "source": 2860837171021627,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "13188536",
                        "value_name": "iPhone 14 Pro",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "13188536",
                                "name": "iPhone 14 Pro",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "13188555",
                        "value_name": "Apple A16 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "13188555",
                                "name": "Apple A16 Bionic",
                                "struct": null,
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "2095088",
                        "value_name": "206 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 206,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "2095088",
                                "name": "206 g",
                                "struct": {
                                    "number": 206,
                                    "unit": "g"
                                },
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 225227.57,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1364926757",
                "title": "Apple iPhone 13 Mini (128 Gb) - Azul",
                "condition": "new",
                "thumbnail_id": "984249-MLA47782359300_102021",
                "catalog_product_id": "MLA18514730",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-13-mini-128-gb-azul/p/MLA18514730",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_984249-MLA47782359300_102021-I.jpg",
                "currency_id": "ARS",
                "order_backend": 7,
                "price": 714999,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 4,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "immediate_payment",
                    "cart_eligible"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-03-31T04:00:00.000Z",
                "seller": {
                    "id": 419467681,
                    "nickname": "MOTEC_ELECTRONICA_AR",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2019-03-24T00:28:54.000-04:00",
                    "tags": [
                        "normal",
                        "from_facebook",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MOTEC_ELECTRONICA_AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 136,
                            "completed": 1505,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.05,
                                "neutral": 0,
                                "positive": 0.95
                            },
                            "total": 1641
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 495
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0037,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0164,
                                "value": 8
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0018,
                                "value": 1
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "PALERMO"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "PALERMO"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "7741027",
                        "value_name": "Apple GPU",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7741027",
                                "name": "Apple GPU",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 2860837171021627
                            }
                        ],
                        "source": 2860837171021627,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "11178784",
                        "value_name": "iPhone 13 mini",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11178784",
                                "name": "iPhone 13 mini",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "11151775",
                        "value_name": "Apple A15 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11151775",
                                "name": "Apple A15 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "1376",
                        "value_name": "140 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 140,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "1376",
                                "name": "140 g",
                                "struct": {
                                    "unit": "g",
                                    "number": 140
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 134419.81,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1386672108",
                "title": "Apple iPhone 14 Pro Max (256 Gb) - Color Plata",
                "condition": "new",
                "thumbnail_id": "770607-MLM51559385328_092022",
                "catalog_product_id": "MLA19615340",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-14-pro-max-256-gb-color-plata/p/MLA19615340",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_770607-MLM51559385328_092022-I.jpg",
                "currency_id": "ARS",
                "order_backend": 8,
                "price": 1280198,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 5,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "immediate_payment",
                    "cart_eligible"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-03-29T04:00:00.000Z",
                "seller": {
                    "id": 419467681,
                    "nickname": "MOTEC_ELECTRONICA_AR",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2019-03-24T00:28:54.000-04:00",
                    "tags": [
                        "normal",
                        "from_facebook",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MOTEC_ELECTRONICA_AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 136,
                            "completed": 1505,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.05,
                                "neutral": 0,
                                "positive": 0.95
                            },
                            "total": 1641
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 495
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0037,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0164,
                                "value": 8
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0018,
                                "value": 1
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "PALERMO"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "PALERMO"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 2860837171021627
                            }
                        ],
                        "source": 2860837171021627,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "13188535",
                        "value_name": "iPhone 14 Pro Max",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "13188535",
                                "name": "iPhone 14 Pro Max",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "13188555",
                        "value_name": "Apple A16 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "13188555",
                                "name": "Apple A16 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "1478",
                        "value_name": "240 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 240,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "1478",
                                "name": "240 g",
                                "struct": {
                                    "number": 240,
                                    "unit": "g"
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 240677.22,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1382459656",
                "title": "Apple iPhone 12 (128 Gb) - Negro",
                "condition": "new",
                "thumbnail_id": "743195-MLA45719932493_042021",
                "catalog_product_id": "MLA16163653",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-12-128-gb-negro/p/MLA16163653",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg",
                "currency_id": "ARS",
                "order_backend": 9,
                "price": 691999,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 5,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "immediate_payment",
                    "cart_eligible"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2043-03-23T04:00:00.000Z",
                "seller": {
                    "id": 419467681,
                    "nickname": "MOTEC_ELECTRONICA_AR",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2019-03-24T00:28:54.000-04:00",
                    "tags": [
                        "normal",
                        "from_facebook",
                        "credits_profile",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/MOTEC_ELECTRONICA_AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": "platinum",
                        "transactions": {
                            "canceled": 136,
                            "completed": 1505,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.05,
                                "neutral": 0,
                                "positive": 0.95
                            },
                            "total": 1641
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 495
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0.0037,
                                "value": 2
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0.0164,
                                "value": 8
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.0018,
                                "value": 1
                            }
                        }
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "PALERMO"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "PALERMO"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "7740544",
                        "value_name": "Apple GPU MP4",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7740544",
                                "name": "Apple GPU MP4",
                                "struct": null,
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 6808261514773724
                            }
                        ],
                        "source": 6808261514773724,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "9081382",
                        "value_name": "iPhone 12",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9081382",
                                "name": "iPhone 12",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "9094177",
                        "value_name": "Apple A14 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9094177",
                                "name": "Apple A14 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "2146956",
                        "value_name": "162 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 162,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "2146956",
                                "name": "162 g",
                                "struct": {
                                    "number": 162,
                                    "unit": "g"
                                },
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 130095.81,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            },
            {
                "id": "MLA1213208859",
                "title": "Apple iPhone SE (3ª Generación, 64 Gb) - Azul Medianoche",
                "condition": "new",
                "thumbnail_id": "696564-MLA52130732644_102022",
                "catalog_product_id": "MLA18969583",
                "listing_type_id": "gold_special",
                "permalink": "https://www.mercadolibre.com.ar/apple-iphone-se-3-generacion-64-gb-azul-medianoche/p/MLA18969583",
                "buying_mode": "buy_it_now",
                "site_id": "MLA",
                "category_id": "MLA1055",
                "domain_id": "MLA-CELLPHONES",
                "thumbnail": "http://http2.mlstatic.com/D_696564-MLA52130732644_102022-I.jpg",
                "currency_id": "ARS",
                "order_backend": 10,
                "price": 422276,
                "original_price": null,
                "sale_price": null,
                "sold_quantity": 5,
                "available_quantity": 1,
                "official_store_id": null,
                "use_thumbnail_id": true,
                "accepts_mercadopago": true,
                "tags": [
                    "extended_warranty_eligible",
                    "good_quality_picture",
                    "good_quality_thumbnail",
                    "immediate_payment",
                    "cart_eligible",
                    "best_seller_candidate",
                    "shipping_guaranteed"
                ],
                "shipping": {
                    "store_pick_up": false,
                    "free_shipping": true,
                    "logistic_type": "xd_drop_off",
                    "mode": "me2",
                    "tags": [
                        "self_service_in",
                        "mandatory_free_shipping"
                    ],
                    "benefits": null,
                    "promise": null
                },
                "stop_time": "2042-10-20T04:00:00.000Z",
                "seller": {
                    "id": 90262631,
                    "nickname": "ALIAS PRODUCCIONES",
                    "car_dealer": false,
                    "real_estate_agency": false,
                    "_": false,
                    "registration_date": "2005-12-28T21:45:20.000-04:00",
                    "tags": [
                        "normal",
                        "credits_profile",
                        "eshop",
                        "mshops",
                        "messages_as_seller"
                    ],
                    "car_dealer_logo": "",
                    "permalink": "http://perfil.mercadolibre.com.ar/APTECNO.AR",
                    "seller_reputation": {
                        "level_id": "5_green",
                        "power_seller_status": null,
                        "transactions": {
                            "canceled": 110,
                            "completed": 979,
                            "period": "historic",
                            "ratings": {
                                "negative": 0.06,
                                "neutral": 0.01,
                                "positive": 0.93
                            },
                            "total": 1089
                        },
                        "metrics": {
                            "sales": {
                                "period": "60 days",
                                "completed": 115
                            },
                            "claims": {
                                "period": "60 days",
                                "rate": 0,
                                "value": 0
                            },
                            "delayed_handling_time": {
                                "period": "60 days",
                                "rate": 0,
                                "value": 0
                            },
                            "cancellations": {
                                "period": "60 days",
                                "rate": 0.008,
                                "value": 1
                            }
                        }
                    },
                    "eshop": {
                        "eshop_id": 64586,
                        "seller": 90262631,
                        "nick_name": "ALIAS PRODUCCIONES",
                        "eshop_status_id": 2,
                        "site_id": "MLA",
                        "eshop_experience": 0,
                        "eshop_rubro": null,
                        "eshop_locations": [],
                        "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/90262631.jpg"
                    }
                },
                "seller_address": {
                    "comment": "",
                    "address_line": "",
                    "id": null,
                    "latitude": null,
                    "longitude": null,
                    "country": {
                        "id": "AR",
                        "name": "Argentina"
                    },
                    "state": {
                        "id": "AR-C",
                        "name": "Capital Federal"
                    },
                    "city": {
                        "id": null,
                        "name": "Capital Federal"
                    }
                },
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "Capital Federal"
                },
                "attributes": [
                    {
                        "id": "BRAND",
                        "name": "Marca",
                        "value_id": "9344",
                        "value_name": "Apple",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "9344",
                                "name": "Apple",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "DETAILED_MODEL",
                        "name": "Modelo detallado",
                        "value_id": "19392551",
                        "value_name": "MMXF3BZ/A",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "19392551",
                                "name": "MMXF3BZ/A",
                                "struct": null,
                                "source": 4709228965570453
                            }
                        ],
                        "source": 4709228965570453,
                        "value_type": "string"
                    },
                    {
                        "id": "GPU_MODEL",
                        "name": "Modelo de GPU",
                        "value_id": "7741027",
                        "value_name": "Apple GPU",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "7741027",
                                "name": "Apple GPU",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "ITEM_CONDITION",
                        "name": "Condición del ítem",
                        "value_id": "2230284",
                        "value_name": "Nuevo",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "2230284",
                                "name": "Nuevo",
                                "struct": null,
                                "source": 3045741222775799
                            }
                        ],
                        "source": 3045741222775799,
                        "value_type": "list"
                    },
                    {
                        "id": "LINE",
                        "name": "Línea",
                        "value_id": "58993",
                        "value_name": "iPhone",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "58993",
                                "name": "iPhone",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "MODEL",
                        "name": "Modelo",
                        "value_id": "11958184",
                        "value_name": "iPhone SE (3rd Generation)",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11958184",
                                "name": "iPhone SE (3rd Generation)",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "PROCESSOR_MODEL",
                        "name": "Modelo del procesador",
                        "value_id": "11151775",
                        "value_name": "Apple A15 Bionic",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": null,
                        "values": [
                            {
                                "id": "11151775",
                                "name": "Apple A15 Bionic",
                                "struct": null,
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "string"
                    },
                    {
                        "id": "WEIGHT",
                        "name": "Peso",
                        "value_id": "2087864",
                        "value_name": "144 g",
                        "attribute_group_id": "OTHERS",
                        "attribute_group_name": "Otros",
                        "value_struct": {
                            "number": 144,
                            "unit": "g"
                        },
                        "values": [
                            {
                                "id": "2087864",
                                "name": "144 g",
                                "struct": {
                                    "number": 144,
                                    "unit": "g"
                                },
                                "source": 1
                            }
                        ],
                        "source": 1,
                        "value_type": "number_unit"
                    }
                ],
                "installments": {
                    "quantity": 12,
                    "amount": 79387.89,
                    "rate": 125.6,
                    "currency_id": "ARS"
                },
                "winner_item_id": null,
                "catalog_listing": true,
                "discounts": null,
                "promotions": [],
                "inventory_id": null
            }
        ],
        "sort": {
            "id": "relevance",
            "name": "Más relevantes"
        },
        "available_sorts": [
            {
                "id": "price_asc",
                "name": "Menor precio"
            },
            {
                "id": "price_desc",
                "name": "Mayor precio"
            }
        ],
        "filters": [
            {
                "id": "category",
                "name": "Categorías",
                "type": "text",
                "values": [
                    {
                        "id": "MLA1055",
                        "name": "Celulares y Smartphones",
                        "path_from_root": [
                            {
                                "id": "MLA1051",
                                "name": "Celulares y Teléfonos"
                            },
                            {
                                "id": "MLA1055",
                                "name": "Celulares y Smartphones"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "LINE",
                "name": "Línea",
                "type": "STRING",
                "values": [
                    {
                        "id": "58993",
                        "name": "iPhone"
                    }
                ]
            },
            {
                "id": "BRAND",
                "name": "Marca",
                "type": "STRING",
                "values": [
                    {
                        "id": "9344",
                        "name": "Apple"
                    }
                ]
            }
        ],
        "available_filters": [
            {
                "id": "discount",
                "name": "Descuentos",
                "type": "number",
                "values": [
                    {
                        "id": "15-100",
                        "name": "Desde 15% OFF",
                        "results": 11
                    },
                    {
                        "id": "20-100",
                        "name": "Desde 20% OFF",
                        "results": 5
                    },
                    {
                        "id": "40-100",
                        "name": "Desde 40% OFF",
                        "results": 2
                    }
                ]
            },
            {
                "id": "price",
                "name": "Precio",
                "type": "range",
                "values": [
                    {
                        "id": "*-100000.0",
                        "name": "Hasta $ 100.000",
                        "results": 3168
                    },
                    {
                        "id": "100000.0-250000.0",
                        "name": "$100.000 a $250.000",
                        "results": 2912
                    },
                    {
                        "id": "250000.0-*",
                        "name": "Más de $250.000",
                        "results": 4166
                    }
                ]
            },
            {
                "id": "accepts_mercadopago",
                "name": "Filtro por MercadoPago",
                "type": "boolean",
                "values": [
                    {
                        "id": "yes",
                        "name": "Con MercadoPago",
                        "results": 10246
                    }
                ]
            },
            {
                "id": "installments",
                "name": "Financiación",
                "type": "text",
                "values": [
                    {
                        "id": "yes",
                        "name": "En cuotas",
                        "results": 6313
                    },
                    {
                        "id": "no_interest",
                        "name": "Sin interés",
                        "results": 825
                    }
                ]
            },
            {
                "id": "shipping",
                "name": "Tipo de entrega",
                "type": "text",
                "values": [
                    {
                        "id": "mercadoenvios",
                        "name": "Con envío",
                        "results": 10237
                    }
                ]
            },
            {
                "id": "power_seller",
                "name": "Filtro por calidad de vendedores",
                "type": "boolean",
                "values": [
                    {
                        "id": "yes",
                        "name": "Mejores vendedores",
                        "results": 432
                    }
                ]
            },
            {
                "id": "since",
                "name": "Filtro por fecha de comienzo",
                "type": "text",
                "values": [
                    {
                        "id": "today",
                        "name": "Publicados hoy",
                        "results": 136
                    }
                ]
            },
            {
                "id": "until",
                "name": "Filtro por fecha de finalización",
                "type": "text",
                "values": [
                    {
                        "id": "today",
                        "name": "Finalizan hoy",
                        "results": 51
                    }
                ]
            },
            {
                "id": "has_video",
                "name": "Filtro por publicaciones con video",
                "type": "boolean",
                "values": [
                    {
                        "id": "yes",
                        "name": "Publicaciones con video",
                        "results": 85
                    }
                ]
            },
            {
                "id": "has_pictures",
                "name": "Filtro por publicaciones con imágenes",
                "type": "boolean",
                "values": [
                    {
                        "id": "yes",
                        "name": "Con fotos",
                        "results": 10246
                    }
                ]
            },
            {
                "id": "price_campaign_id",
                "name": "Campaña",
                "type": "number",
                "values": [
                    {
                        "id": "MLA33911",
                        "name": "MLA33911",
                        "results": 2
                    }
                ]
            },
            {
                "id": "shipping_cost",
                "name": "Costo de envío",
                "type": "text",
                "values": [
                    {
                        "id": "free",
                        "name": "Gratis",
                        "results": 4914
                    }
                ]
            },
            {
                "id": "CARRIER",
                "name": "Compañía telefónica",
                "type": "STRING",
                "values": [
                    {
                        "id": "298335",
                        "name": "Liberado",
                        "results": 6758
                    },
                    {
                        "id": "303171",
                        "name": "Personal",
                        "results": 70
                    },
                    {
                        "id": "298333",
                        "name": "Claro",
                        "results": 68
                    },
                    {
                        "id": "303170",
                        "name": "Movistar",
                        "results": 58
                    },
                    {
                        "id": "303172",
                        "name": "Nextel",
                        "results": 6
                    }
                ]
            },
            {
                "id": "DISPLAY_SIZE",
                "name": "Tamaño de la pantalla",
                "type": "range",
                "values": [
                    {
                        "id": "(*-5.4\")",
                        "name": "Menos de 5,4 \"",
                        "results": 2722
                    },
                    {
                        "id": "[5.4\"-6.1\")",
                        "name": "5,4 a 6 \"",
                        "results": 1372
                    },
                    {
                        "id": "[6.1\"-6.5\")",
                        "name": "6,1 a 6,4 \"",
                        "results": 1818
                    },
                    {
                        "id": "[6.5\"-*)",
                        "name": "6,5 \" o más",
                        "results": 602
                    }
                ]
            },
            {
                "id": "official_store",
                "name": "Tiendas oficiales",
                "type": "text",
                "values": [
                    {
                        "id": "all",
                        "name": "Todas las tiendas oficiales",
                        "results": 13
                    },
                    {
                        "id": "3133",
                        "name": "CPT Oficina",
                        "results": 4
                    },
                    {
                        "id": "2549",
                        "name": "Apple",
                        "results": 9
                    }
                ]
            },
            {
                "id": "INTERNAL_MEMORY",
                "name": "Memoria interna",
                "type": "range",
                "values": [
                    {
                        "id": "(*-64GB)",
                        "name": "Menos de 64 GB",
                        "results": 1404
                    },
                    {
                        "id": "[64GB-128GB)",
                        "name": "64 a 127 GB",
                        "results": 2400
                    },
                    {
                        "id": "[128GB-256GB)",
                        "name": "128 a 255 GB",
                        "results": 1990
                    },
                    {
                        "id": "[256GB-*)",
                        "name": "256 GB o más",
                        "results": 1162
                    }
                ]
            },
            {
                "id": "IS_DUAL_SIM",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Es Dual SIM",
                        "results": 174
                    }
                ]
            },
            {
                "id": "IS_DUST_RESISTANT",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Es resistente al polvo",
                        "results": 5048
                    }
                ]
            },
            {
                "id": "IS_WATERPROOF",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Es a prueba de agua",
                        "results": 78
                    }
                ]
            },
            {
                "id": "IS_WATER_RESISTANT",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Es resistente al agua",
                        "results": 5032
                    }
                ]
            },
            {
                "id": "ITEM_CONDITION",
                "name": "Condición",
                "type": "STRING",
                "values": [
                    {
                        "id": "2230581",
                        "name": "Usado",
                        "results": 6454
                    },
                    {
                        "id": "2230284",
                        "name": "Nuevo",
                        "results": 280
                    },
                    {
                        "id": "2230582",
                        "name": "Reacondicionado",
                        "results": 230
                    }
                ]
            },
            {
                "id": "state",
                "name": "Ubicación",
                "type": "text",
                "values": [
                    {
                        "id": "TUxBUENBUGw3M2E1",
                        "name": "Capital Federal",
                        "results": 3632
                    },
                    {
                        "id": "TUxBUEdSQXJlMDNm",
                        "name": "Bs.As. G.B.A. Sur",
                        "results": 1268
                    },
                    {
                        "id": "TUxBUEdSQWU4ZDkz",
                        "name": "Bs.As. G.B.A. Norte",
                        "results": 1255
                    },
                    {
                        "id": "TUxBUEdSQWVmNTVm",
                        "name": "Bs.As. G.B.A. Oeste",
                        "results": 1045
                    },
                    {
                        "id": "TUxBUFpPTmFpbnRl",
                        "name": "Buenos Aires Interior",
                        "results": 464
                    },
                    {
                        "id": "TUxBUENPUmFkZGIw",
                        "name": "Córdoba",
                        "results": 388
                    },
                    {
                        "id": "TUxBUFNBTmU5Nzk2",
                        "name": "Santa Fe",
                        "results": 388
                    },
                    {
                        "id": "TUxBUE1FTmE5OWQ4",
                        "name": "Mendoza",
                        "results": 169
                    },
                    {
                        "id": "TUxBUENPU2ExMmFkMw",
                        "name": "Bs.As. Costa Atlántica",
                        "results": 165
                    },
                    {
                        "id": "TUxBUE1JU3MzNjIx",
                        "name": "Misiones",
                        "results": 122
                    },
                    {
                        "id": "TUxBUENPUnM5MjI0",
                        "name": "Corrientes",
                        "results": 105
                    },
                    {
                        "id": "TUxBUEVOVHMzNTdm",
                        "name": "Entre Ríos",
                        "results": 96
                    },
                    {
                        "id": "TUxBUFRVQ244NmM3",
                        "name": "Tucumán",
                        "results": 90
                    },
                    {
                        "id": "TUxBUE5FVW4xMzMzNQ",
                        "name": "Neuquén",
                        "results": 63
                    },
                    {
                        "id": "TUxBUFNBTm5lYjU4",
                        "name": "San Juan",
                        "results": 63
                    },
                    {
                        "id": "TUxBUFNBTGFjMTJi",
                        "name": "Salta",
                        "results": 57
                    },
                    {
                        "id": "TUxBUENIQW8xMTNhOA",
                        "name": "Chaco",
                        "results": 54
                    },
                    {
                        "id": "TUxBUFNBTno3ZmY5",
                        "name": "Santa Cruz",
                        "results": 48
                    },
                    {
                        "id": "TUxBUFLNT29iZmZm",
                        "name": "Río Negro",
                        "results": 45
                    },
                    {
                        "id": "TUxBUENIVXQxNDM1MQ",
                        "name": "Chubut",
                        "results": 36
                    },
                    {
                        "id": "TUxBUEZPUmE1OTk5",
                        "name": "Formosa",
                        "results": 33
                    },
                    {
                        "id": "TUxBUFNBTnM0ZTcz",
                        "name": "San Luis",
                        "results": 33
                    },
                    {
                        "id": "TUxBUEpVSnk3YmUz",
                        "name": "Jujuy",
                        "results": 24
                    },
                    {
                        "id": "TUxBUExBWmE1OWMy",
                        "name": "La Pampa",
                        "results": 24
                    },
                    {
                        "id": "TUxBUFNBTm9lOTlk",
                        "name": "Santiago del Estero",
                        "results": 24
                    },
                    {
                        "id": "TUxBUExBWmEyNzY0",
                        "name": "La Rioja",
                        "results": 21
                    },
                    {
                        "id": "TUxBUENBVGFiY2Fm",
                        "name": "Catamarca",
                        "results": 15
                    },
                    {
                        "id": "TUxBUFRJRVoxM2M5YQ",
                        "name": "Tierra del Fuego",
                        "results": 9
                    }
                ]
            },
            {
                "id": "MAIN_COLOR",
                "name": "Color principal",
                "type": "list",
                "values": [
                    {
                        "id": "2450294",
                        "name": "Gris",
                        "results": 1744
                    },
                    {
                        "id": "2450295",
                        "name": "Negro",
                        "results": 1300
                    },
                    {
                        "id": "2450289",
                        "name": "Dorado",
                        "results": 544
                    },
                    {
                        "id": "2450308",
                        "name": "Blanco",
                        "results": 452
                    },
                    {
                        "id": "2450312",
                        "name": "Rosa",
                        "results": 440
                    },
                    {
                        "id": "2450293",
                        "name": "Azul",
                        "results": 318
                    },
                    {
                        "id": "2450307",
                        "name": "Rojo",
                        "results": 296
                    },
                    {
                        "id": "2450311",
                        "name": "Violeta",
                        "results": 130
                    },
                    {
                        "id": "2450314",
                        "name": "Verde",
                        "results": 106
                    },
                    {
                        "id": "2450299",
                        "name": "Gris oscuro",
                        "results": 76
                    },
                    {
                        "id": "2450303",
                        "name": "Plateado",
                        "results": 46
                    },
                    {
                        "id": "2450296",
                        "name": "Amarillo",
                        "results": 42
                    },
                    {
                        "id": "2450280",
                        "name": "Rosa claro",
                        "results": 12
                    },
                    {
                        "id": "2450313",
                        "name": "Coral claro",
                        "results": 10
                    },
                    {
                        "id": "2450324",
                        "name": "Verde oscuro",
                        "results": 4
                    },
                    {
                        "id": "2450318",
                        "name": "Coral",
                        "results": 4
                    },
                    {
                        "id": "11282035",
                        "name": "Gris claro",
                        "results": 4
                    },
                    {
                        "id": "2450321",
                        "name": "Lila",
                        "results": 2
                    },
                    {
                        "id": "2450302",
                        "name": "Azul acero",
                        "results": 2
                    },
                    {
                        "id": "2450298",
                        "name": "Azul claro",
                        "results": 2
                    },
                    {
                        "id": "2450290",
                        "name": "Violeta oscuro",
                        "results": 2
                    },
                    {
                        "id": "2450287",
                        "name": "Suela",
                        "results": 2
                    },
                    {
                        "id": "2450286",
                        "name": "Nude",
                        "results": 2
                    },
                    {
                        "id": "2450278",
                        "name": "Celeste",
                        "results": 2
                    }
                ]
            },
            {
                "id": "MAIN_FRONT_CAMERA_RESOLUTION",
                "name": "Resolución de la cámara frontal principal",
                "type": "range",
                "values": [
                    {
                        "id": "(*-12Mpx)",
                        "name": "12 Mpx o menos",
                        "results": 4430
                    },
                    {
                        "id": "[12Mpx-48Mpx)",
                        "name": "12 a 47 Mpx",
                        "results": 1994
                    },
                    {
                        "id": "[48Mpx-*)",
                        "name": "48 Mpx o más",
                        "results": 66
                    }
                ]
            },
            {
                "id": "MAIN_REAR_CAMERA_RESOLUTION",
                "name": "Resolución de la cámara trasera principal",
                "type": "range",
                "values": [
                    {
                        "id": "(*-48Mpx)",
                        "name": "48 Mpx o menos",
                        "results": 6428
                    },
                    {
                        "id": "[48Mpx-*)",
                        "name": "48 Mpx o más",
                        "results": 80
                    }
                ]
            },
            {
                "id": "MOBILE_NETWORK",
                "name": "Red móvil",
                "type": "STRING",
                "values": [
                    {
                        "id": "367876",
                        "name": "4G/LTE",
                        "results": 5302
                    },
                    {
                        "id": "7472027",
                        "name": "5G",
                        "results": 1248
                    },
                    {
                        "id": "367874",
                        "name": "3G",
                        "results": 36
                    },
                    {
                        "id": "7472026",
                        "name": "2G",
                        "results": 26
                    }
                ]
            },
            {
                "id": "MODEL",
                "name": "Modelo",
                "type": "STRING",
                "values": [
                    {
                        "id": "312155",
                        "name": "iPhone 7",
                        "results": 800
                    },
                    {
                        "id": "7739079",
                        "name": "iPhone 11",
                        "results": 720
                    },
                    {
                        "id": "312151",
                        "name": "iPhone 6s",
                        "results": 552
                    },
                    {
                        "id": "2244670",
                        "name": "iPhone 8",
                        "results": 484
                    },
                    {
                        "id": "5414260",
                        "name": "iPhone XR",
                        "results": 462
                    },
                    {
                        "id": "312149",
                        "name": "iPhone 6",
                        "results": 370
                    },
                    {
                        "id": "2244673",
                        "name": "iPhone 8 Plus",
                        "results": 354
                    },
                    {
                        "id": "1164456",
                        "name": "iPhone X",
                        "results": 346
                    },
                    {
                        "id": "312157",
                        "name": "iPhone 7 Plus",
                        "results": 340
                    },
                    {
                        "id": "9081382",
                        "name": "iPhone 12",
                        "results": 236
                    },
                    {
                        "id": "312154",
                        "name": "iPhone SE",
                        "results": 218
                    },
                    {
                        "id": "11159139",
                        "name": "iPhone 13",
                        "results": 158
                    },
                    {
                        "id": "11151776",
                        "name": "iPhone 13 Pro Max",
                        "results": 158
                    },
                    {
                        "id": "8230322",
                        "name": "iPhone SE (2nd Generation)",
                        "results": 142
                    },
                    {
                        "id": "7741677",
                        "name": "iPhone 11 Pro Max",
                        "results": 142
                    },
                    {
                        "id": "9081385",
                        "name": "iPhone 12 Pro Max",
                        "results": 128
                    },
                    {
                        "id": "7741023",
                        "name": "iPhone 11 Pro",
                        "results": 124
                    },
                    {
                        "id": "5414079",
                        "name": "iPhone XS",
                        "results": 114
                    },
                    {
                        "id": "312153",
                        "name": "iPhone 6s Plus",
                        "results": 112
                    },
                    {
                        "id": "5414168",
                        "name": "iPhone XS Max",
                        "results": 106
                    },
                    {
                        "id": "9081384",
                        "name": "iPhone 12 Pro",
                        "results": 98
                    },
                    {
                        "id": "11151811",
                        "name": "iPhone 13 Pro",
                        "results": 94
                    },
                    {
                        "id": "13188536",
                        "name": "iPhone 14 Pro",
                        "results": 84
                    },
                    {
                        "id": "13188535",
                        "name": "iPhone 14 Pro Max",
                        "results": 76
                    },
                    {
                        "id": "312150",
                        "name": "iPhone 6 Plus",
                        "results": 58
                    },
                    {
                        "id": "312144",
                        "name": "iPhone 5s",
                        "results": 56
                    },
                    {
                        "id": "14608",
                        "name": "iPhone",
                        "results": 48
                    },
                    {
                        "id": "11178784",
                        "name": "iPhone 13 mini",
                        "results": 48
                    },
                    {
                        "id": "13188538",
                        "name": "iPhone 14",
                        "results": 44
                    },
                    {
                        "id": "312152",
                        "name": "iPhone 5",
                        "results": 36
                    },
                    {
                        "id": "9081383",
                        "name": "iPhone 12 mini",
                        "results": 34
                    },
                    {
                        "id": "13188537",
                        "name": "iPhone 14 Plus",
                        "results": 32
                    },
                    {
                        "id": "11958184",
                        "name": "iPhone SE (3rd Generation)",
                        "results": 20
                    },
                    {
                        "id": "312145",
                        "name": "iPhone 4s",
                        "results": 18
                    },
                    {
                        "id": "51936",
                        "name": "13",
                        "results": 16
                    },
                    {
                        "id": "312143",
                        "name": "iPhone 5c",
                        "results": 16
                    },
                    {
                        "id": "13864727",
                        "name": "13 Pro",
                        "results": 16
                    },
                    {
                        "id": "11043",
                        "name": "8",
                        "results": 8
                    },
                    {
                        "id": "14610",
                        "name": "iPhone 4",
                        "results": 6
                    },
                    {
                        "id": "5729",
                        "name": "XS",
                        "results": 4
                    },
                    {
                        "id": "4904058",
                        "name": "8 Plus",
                        "results": 4
                    },
                    {
                        "id": "165838",
                        "name": "SE",
                        "results": 4
                    },
                    {
                        "id": "59833",
                        "name": "6",
                        "results": 2
                    },
                    {
                        "id": "59000",
                        "name": "5s",
                        "results": 2
                    },
                    {
                        "id": "14609",
                        "name": "iPhone 3GS",
                        "results": 2
                    },
                    {
                        "id": "14605",
                        "name": "iPhone 3G",
                        "results": 2
                    }
                ]
            },
            {
                "id": "OPERATING_SYSTEM_NAME",
                "name": "Nombre del sistema operativo",
                "type": "STRING",
                "values": [
                    {
                        "id": "7404961",
                        "name": "iOS",
                        "results": 6692
                    },
                    {
                        "id": "7239397",
                        "name": "Windows Phone",
                        "results": 10
                    },
                    {
                        "id": "7403813",
                        "name": "Android",
                        "results": 2
                    }
                ]
            },
            {
                "id": "RAM",
                "name": "Memoria RAM",
                "type": "range",
                "values": [
                    {
                        "id": "(*-2GB]",
                        "name": "2 GB o menos",
                        "results": 2410
                    },
                    {
                        "id": "[2.67GB-2.67GB]",
                        "name": "2.67 GB",
                        "results": 2
                    },
                    {
                        "id": "[3GB-3GB]",
                        "name": "3 GB",
                        "results": 1550
                    },
                    {
                        "id": "[4GB-4GB]",
                        "name": "4 GB",
                        "results": 1706
                    },
                    {
                        "id": "[5GB-5GB]",
                        "name": "5 GB",
                        "results": 28
                    },
                    {
                        "id": "[6GB-6GB]",
                        "name": "6 GB",
                        "results": 638
                    },
                    {
                        "id": "[7GB-7GB]",
                        "name": "7 GB",
                        "results": 2
                    },
                    {
                        "id": "[8GB-*)",
                        "name": "8 GB o más",
                        "results": 504
                    }
                ]
            },
            {
                "id": "WITH_3_5_MM_JACK_CONNECTOR",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con conector jack 3.5 mm",
                        "results": 714
                    }
                ]
            },
            {
                "id": "WITH_BLUETOOTH",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con Bluetooth",
                        "results": 6508
                    }
                ]
            },
            {
                "id": "WITH_FACIAL_RECOGNITION",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con reconocimiento facial",
                        "results": 3120
                    }
                ]
            },
            {
                "id": "WITH_FAST_CHARGING",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con carga rápida",
                        "results": 3146
                    }
                ]
            },
            {
                "id": "WITH_FINGERPRINT_READER",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con lector de huella digital",
                        "results": 3320
                    }
                ]
            },
            {
                "id": "WITH_GPS",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con GPS",
                        "results": 6486
                    }
                ]
            },
            {
                "id": "WITH_GYROSCOPE",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con giroscopio",
                        "results": 6488
                    }
                ]
            },
            {
                "id": "WITH_MEMORY_CARD_SLOT",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con ranura para tarjeta de memoria",
                        "results": 8
                    }
                ]
            },
            {
                "id": "WITH_NFC",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con NFC",
                        "results": 5698
                    }
                ]
            },
            {
                "id": "WITH_PROXIMITY_SENSOR",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con sensor de proximidad",
                        "results": 6510
                    }
                ]
            },
            {
                "id": "WITH_RADIO",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con radio",
                        "results": 20
                    }
                ]
            },
            {
                "id": "WITH_WIRELESS_CHARGING",
                "name": "Otras características",
                "type": "boolean",
                "values": [
                    {
                        "id": "242085",
                        "name": "Con carga inalámbrica",
                        "results": 4118
                    }
                ]
            },
            {
                "id": "product",
                "name": "Producto",
                "type": "text",
                "values": [
                    {
                        "id": "MLA6240112",
                        "name": "Apple iPhone 7",
                        "results": 1206
                    },
                    {
                        "id": "MLA15149560",
                        "name": "Apple iPhone 11",
                        "results": 1086
                    },
                    {
                        "id": "MLA6127568",
                        "name": "Apple iPhone 6s",
                        "results": 810
                    },
                    {
                        "id": "MLA8752429",
                        "name": "Apple iPhone 8",
                        "results": 729
                    },
                    {
                        "id": "MLA12866677",
                        "name": "Apple iPhone XR",
                        "results": 696
                    },
                    {
                        "id": "MLA6055012",
                        "name": "Apple iPhone 6",
                        "results": 558
                    },
                    {
                        "id": "MLA8752450",
                        "name": "Apple iPhone 8 Plus",
                        "results": 543
                    },
                    {
                        "id": "MLA6240128",
                        "name": "Apple iPhone 7 Plus",
                        "results": 510
                    },
                    {
                        "id": "MLA7979515",
                        "name": "Apple iPhone X",
                        "results": 510
                    },
                    {
                        "id": "MLA16163646",
                        "name": "Apple iPhone 12",
                        "results": 352
                    },
                    {
                        "id": "MLA6174076",
                        "name": "Apple iPhone SE",
                        "results": 321
                    },
                    {
                        "id": "MLA18494229",
                        "name": "Apple iPhone 13 Pro Max",
                        "results": 248
                    },
                    {
                        "id": "MLA18500843",
                        "name": "Apple iPhone 13",
                        "results": 248
                    },
                    {
                        "id": "MLA15150971",
                        "name": "Apple iPhone 11 Pro Max",
                        "results": 213
                    },
                    {
                        "id": "MLA15591330",
                        "name": "Apple iPhone SE (2nd Generation)",
                        "results": 213
                    },
                    {
                        "id": "MLA16163691",
                        "name": "Apple iPhone 12 Pro Max",
                        "results": 185
                    },
                    {
                        "id": "MLA12866563",
                        "name": "Apple iPhone XS",
                        "results": 182
                    },
                    {
                        "id": "MLA15150711",
                        "name": "Apple iPhone 11 Pro",
                        "results": 180
                    },
                    {
                        "id": "MLA6143807",
                        "name": "Apple iPhone 6s Plus",
                        "results": 167
                    },
                    {
                        "id": "MLA12866625",
                        "name": "Apple iPhone XS Max",
                        "results": 158
                    },
                    {
                        "id": "MLA18494246",
                        "name": "Apple iPhone 13 Pro",
                        "results": 152
                    },
                    {
                        "id": "MLA16163678",
                        "name": "Apple iPhone 12 Pro",
                        "results": 137
                    },
                    {
                        "id": "MLA19615314",
                        "name": "Apple iPhone 14 Pro",
                        "results": 123
                    },
                    {
                        "id": "MLA19615313",
                        "name": "Apple iPhone 14 Pro Max",
                        "results": 101
                    },
                    {
                        "id": "MLA6055022",
                        "name": "Apple iPhone 6 Plus",
                        "results": 85
                    },
                    {
                        "id": "MLA5513986",
                        "name": "Apple iPhone 5s",
                        "results": 80
                    },
                    {
                        "id": "MLA18514720",
                        "name": "Apple iPhone 13 mini",
                        "results": 66
                    },
                    {
                        "id": "MLA19615316",
                        "name": "Apple iPhone 14",
                        "results": 56
                    },
                    {
                        "id": "MLA6087419",
                        "name": "Apple iPhone 5",
                        "results": 50
                    },
                    {
                        "id": "MLA16163662",
                        "name": "Apple iPhone 12 mini",
                        "results": 47
                    },
                    {
                        "id": "MLA19615315",
                        "name": "Apple iPhone 14 Plus",
                        "results": 42
                    },
                    {
                        "id": "MLA6007095",
                        "name": "Apple iPhone",
                        "results": 31
                    },
                    {
                        "id": "MLA5514137",
                        "name": "Apple iPhone 4s",
                        "results": 29
                    },
                    {
                        "id": "MLA18969580",
                        "name": "Apple iPhone SE (3rd Generation)",
                        "results": 24
                    },
                    {
                        "id": "MLA5514050",
                        "name": "Apple iPhone 5c",
                        "results": 20
                    },
                    {
                        "id": "MLA15149561",
                        "name": "Apple iPhone 11 (64 GB) - Negro",
                        "results": 1
                    },
                    {
                        "id": "MLA15149567",
                        "name": "Apple iPhone 11 (128 GB) - Negro",
                        "results": 1
                    },
                    {
                        "id": "MLA15591332",
                        "name": "Apple iPhone SE (2da generación) 64 GB - Blanco",
                        "results": 1
                    },
                    {
                        "id": "MLA16163648",
                        "name": "Apple iPhone 12 (64 GB) - Negro",
                        "results": 1
                    },
                    {
                        "id": "MLA16163653",
                        "name": "Apple iPhone 12 (128 GB) - Negro",
                        "results": 1
                    },
                    {
                        "id": "MLA16163664",
                        "name": "Apple iPhone 12 mini (64 GB) - Negro",
                        "results": 1
                    },
                    {
                        "id": "MLA16163674",
                        "name": "Apple iPhone 12 mini (256 GB) - Negro",
                        "results": 1
                    },
                    {
                        "id": "MLA18494260",
                        "name": "Apple iPhone 13 Pro (1 TB) - Grafito",
                        "results": 1
                    },
                    {
                        "id": "MLA18500845",
                        "name": "Apple iPhone 13 (512 GB) - Azul medianoche",
                        "results": 1
                    },
                    {
                        "id": "MLA18500846",
                        "name": "Apple iPhone 13 (128 GB) - Azul",
                        "results": 1
                    },
                    {
                        "id": "MLA18500856",
                        "name": "Apple iPhone 13 (256 GB) - Blanco estelar",
                        "results": 1
                    },
                    {
                        "id": "MLA18514730",
                        "name": "Apple iPhone 13 mini (128 GB) - Azul",
                        "results": 1
                    },
                    {
                        "id": "MLA18514734",
                        "name": "Apple iPhone 13 mini (256 GB) - Rosa",
                        "results": 1
                    },
                    {
                        "id": "MLA18969583",
                        "name": "Apple iPhone SE (3ª generación, 64 GB) - Azul medianoche",
                        "results": 1
                    },
                    {
                        "id": "MLA18969586",
                        "name": "Apple iPhone SE (3ª generación, 128 GB) - Azul medianoche",
                        "results": 1
                    }
                ]
            }
        ],
        "pads_info": {
            "tracelog": [
                "mclics_off_cause=no_d2id;mclics_off"
            ]
        }
    }
];