
export interface Result {
    id:                    string;
    title:                 string;
    condition:             Condition;
    thumbnail_id:          string;
    catalog_product_id:    string;
    listing_type_id:       ListingTypeID;
    permalink:             string;
    buying_mode:           BuyingMode;
    site_id:               SiteID;
    category_id:           CategoryID;
    domain_id:             DomainID;
    thumbnail:             string;
    currency_id:           CurrencyID;
    order_backend:         number;
    price:                 number;
    original_price:        null;
    sale_price:            null;
    sold_quantity:         number;
    available_quantity:    number;
    official_store_id:     number | null;
    use_thumbnail_id:      boolean;
    accepts_mercadopago:   boolean;
    tags:                  string[];
    shipping:              Shipping;
    stop_time:             string;
    seller:                Seller;
    seller_address:        SellerAddress;
    address:               Address;
    attributes:            Attribute[];
    installments:          Installments;
    winner_item_id:        null;
    catalog_listing:       boolean;
    discounts:             null;
    promotions:            any[];
    inventory_id:          null;
    official_store_name?:  string;
    differential_pricing?: DifferentialPricing;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    null | string;
    city_name:  string;
}

export enum StateID {
    ArC = "AR-C",
}

export enum StateName {
    CapitalFederal = "Capital Federal",
}

export interface Attribute {
    id:                   ID;
    name:                 Name;
    value_id:             string;
    value_name:           string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           ValueType;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export enum ID {
    Brand = "BRAND",
    DetailedModel = "DETAILED_MODEL",
    GPUModel = "GPU_MODEL",
    ItemCondition = "ITEM_CONDITION",
    Line = "LINE",
    Model = "MODEL",
    ProcessorModel = "PROCESSOR_MODEL",
    Weight = "WEIGHT",
}

export enum Name {
    CondiciónDelÍtem = "Condición del ítem",
    Línea = "Línea",
    Marca = "Marca",
    Modelo = "Modelo",
    ModeloDeGPU = "Modelo de GPU",
    ModeloDelProcesador = "Modelo del procesador",
    ModeloDetallado = "Modelo detallado",
    Peso = "Peso",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    G = "g",
}

export enum ValueType {
    List = "list",
    NumberUnit = "number_unit",
    String = "string",
}

export interface AttributeValue {
    id:     string;
    name:   string;
    struct: Struct | null;
    source: number;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum CategoryID {
    Mla1055 = "MLA1055",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Ars = "ARS",
}

export interface DifferentialPricing {
    id: number;
}

export enum DomainID {
    MlaCellphones = "MLA-CELLPHONES",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export interface Seller {
    id:                 number;
    nickname:           string;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    _:                  boolean;
    registration_date:  string;
    tags:               string[];
    car_dealer_logo:    string;
    permalink:          string;
    seller_reputation:  SellerReputation;
    eshop?:             Eshop;
}

export interface Eshop {
    eshop_id:         number;
    seller:           number;
    nick_name:        string;
    eshop_status_id:  number;
    site_id:          SiteID;
    eshop_experience: number;
    eshop_rubro:      null;
    eshop_locations:  any[];
    eshop_logo_url:   string;
}

export enum SiteID {
    Mla = "MLA",
}

export interface SellerReputation {
    level_id:            LevelID;
    power_seller_status: null | string;
    transactions:        Transactions;
    metrics:             Metrics;
}

export enum LevelID {
    The5_Green = "5_green",
}

export interface Metrics {
    sales:                 Sales;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    cancellations:         Cancellations;
}

export interface Cancellations {
    period:    CancellationsPeriod;
    rate:      number;
    value:     number;
    excluded?: Excluded;
}

export interface Excluded {
    real_value: number;
    real_rate:  number;
}

export enum CancellationsPeriod {
    The60Days = "60 days",
}

export interface Sales {
    period:    CancellationsPeriod;
    completed: number;
}

export interface Transactions {
    canceled:  number;
    completed: number;
    period:    TransactionsPeriod;
    ratings:   Ratings;
    total:     number;
}

export enum TransactionsPeriod {
    Historic = "historic",
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export interface SellerAddress {
    comment:      string;
    address_line: string;
    id:           null;
    latitude:     null;
    longitude:    null;
    country:      Sort;
    state:        Sort;
    city:         Sort;
}

export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: LogisticType;
    mode:          Mode;
    tags:          Tag[];
    benefits:      null;
    promise:       null;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum Tag {
    MandatoryFreeShipping = "mandatory_free_shipping",
    SelfServiceIn = "self_service_in",
    SelfServiceOut = "self_service_out",
}
