export interface Ifilter {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
    }
    
    export interface FilterValue {
    id: string;
    name: string;
    results: number;
    }


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
