import { DateRange } from '@/_models';
import { Edge } from './edge.contract';

export class UserStats {

    public payload: Edge[];

    constructor( { dateTo, dateFrom } : DateRange) {

        this.payload =  [ 
                            new Edge( "dtFrom", "datetime", " >= ", "",      this.formatDate( dateFrom ),  0 ),
                            new Edge( "dtTo",   "datetime", " <= ", " and ", this.formatDate( dateTo ),    1)
                        ]
    }

    private formatDate( milli: number ) : string {

        const date = new Date( milli );

        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
}