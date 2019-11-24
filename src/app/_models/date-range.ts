export class DateRange {
    dateTo      : number;
    dateFrom    : number;
    dateType   ?: number;

    constructor(dateFrom: number, dateTo: number, dateType: number) {
        
        this.dateTo     = dateTo;
        this.dateFrom   = dateFrom;        
        this.dateType   = dateType;
    }
}