import { Auth } from '@/_models';

export class Wrapper {

	private accesskey 	    : string;
	private userid 		    : number;
	private sessionkey 	    : string;
	private genericbody 	: any;
    private genericbody2 	: any;
    
    constructor( raw: any, access: Auth ) {

	    this.accesskey 	    = access.accesskey;
	    this.userid 		= access.userid;
	    this.sessionkey 	= access.sessionkey;
	    this.genericbody 	= raw;
	    this.genericbody2 	= null
    }
}