export class Edge {

    private columnname              : string;
    private datatype                : string;
    private parametermatchoperator  : string;
    private relationtoothers        : string;
    private value                   : any;
    private index                   : number;

    constructor( name: string, datatype: string, param: string, rel: string, val: any, idx: number ) {

        this.columnname              = name,
        this.datatype                = datatype,
        this.parametermatchoperator  = param,
        this.relationtoothers        = rel,
        this.value                   = val,
        this.index                   = idx
    }
}
