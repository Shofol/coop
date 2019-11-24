import { DashboardState } from './dashboard.reducer';
import { DateRange } from '@/_models';

const MILLIWEEK = 604800000;

export function updateDateRange( state: DashboardState, dateType: number ) : DateRange {

    const dateFrom  = solveDateFrom( state.dashDate.dateFrom, dateType );
    const dateTo    = solveDateTo( dateFrom, dateType);

    return { dateType, dateFrom, dateTo }
}

function solveDateFrom( input: number, dateType: number ) : number {

    switch( dateType ) {

        /* Week */      case 1  : return input || new Date().setHours(12,0,0,0);
        /* Month */     case 2  : return input || new Date().setHours(12,0,0,0);
        /* Quarter */   case 3  : return solveQuarter( input || new Date().setHours(12,0,0,0) );
        /* Year */      case 4  : return input || new Date().setHours(12,0,0,0);
        /* All Time */  case 5  : return null;

                        default : throw "solveDateFrom error";
    }
}

function solveDateTo( dateFrom: number, dateType: number ) : number {

    switch( dateType ) {

        /* Week */      case 1  : return dateFrom + MILLIWEEK;
        /* Month */     case 2  : return generateNewDateTo( 1,  dateFrom ).getTime();
        /* Quarter */   case 3  : return generateNewDateTo( 3,  dateFrom ).getTime();
        /* Year */      case 4  : return generateNewDateTo( 12, dateFrom ).getTime();
        /* All Time */  case 5  : return null;

                        default : throw "solveDateTo error";
    }
}

function solveQuarter( input: number ) : number {
    
    const date = new Date( input );

    date.setMonth( date.getMonth() - date.getMonth() % 3 )

    date.setDate( 1 );

    return date.getTime();
}

export function shiftDateRange( state: DashboardState, dir: string, target?: DateRange ) : DateRange {

    const { dateFrom, dateType } = state.dashDate;

    switch( dateType ) {

        /* Week */      case 1  : target = shiftWeek(   dateFrom, dir     );  break; 
        /* Month */     case 2  : target = shiftMonth(  dateFrom, dir, 1  );  break;
        /* Quarter */   case 3  : target = shiftMonth(  dateFrom, dir, 3  );  break; 
        /* Year */      case 4  : target = shiftMonth(  dateFrom, dir, 12 );  break; 
        /* All Time */  case 5  : target = { dateFrom: null, dateTo: null };  break; 

                        default : throw "shiftDateRange error";
    }

    return { 
        ...state.dashDate, 

        dateFrom    : target.dateFrom, 
        dateTo      : target.dateTo 
    }
}

function shiftWeek( input: number, dir: string ) : DateRange {

    switch(true) {

        case dir == 'inc'   : return { dateFrom: input + MILLIWEEK, dateTo: input + ( MILLIWEEK * 2 ) };
        case dir == 'dec'   : return { dateFrom: input - MILLIWEEK, dateTo: input };
        default             : throw "Direction Error in shiftWeek";
    }
}

function shiftMonth( input: number, dir: string, amount: number ) : DateRange { 

    if( ['inc', 'dec'].indexOf( dir ) == -1 ) { throw "Direction Error in shiftMonth"; }

    const oldDateFrom       = new Date( input );
    const difference        = dir == 'inc' ? amount : ( -1 * amount );
    const newDateFrom       = generateNewDateFrom( difference, oldDateFrom );
    const newDateTo         = generateNewDateTo(   difference, newDateFrom.getTime() );

    return { dateFrom: newDateFrom.getTime(), dateTo: newDateTo.getTime() };
}

function generateNewDateFrom( difference: number, input: Date ) : Date {

    return new Date( input.setMonth( input.getMonth() + difference ) );
}

export function generateNewDateTo( difference: number, input: number ) : Date { // diff could be month, quarter or year

    const baseLineDate = new Date(input);

    return new Date( baseLineDate.setMonth( baseLineDate.getMonth() + Math.abs( difference ) ) );
}