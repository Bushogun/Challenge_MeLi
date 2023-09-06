export interface IfilterRangeValues {
    id:     string;
    name:   string;
    type:   string;
    values: Value[];
}

export interface Value {
    id:      string;
    name:    string;
    results: number;
}
