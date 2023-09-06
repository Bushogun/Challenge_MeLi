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
