import { Edge } from './edge.contract';

export class Pagination {

    private filters             : Edge;            
    private datasource          : string;
    private globalsearch        : string;  
    private sortororderby       : string;
    private search              : string;
    private numrecordsperpage   : number;   
    private selectedpage        : number;

    constructor( { filters, data, global, sort, search, records, page } ) {
        
        this.filters            = filters;
        this.datasource         = data;
        this.globalsearch       = global;
        this.sortororderby      = sort;
        this.search             = search;
        this.numrecordsperpage  = records;
        this.selectedpage       = page;
    }
}