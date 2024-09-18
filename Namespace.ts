namespace DateUtils
{
    export function getcurrentDate(): number
    {
        const today = new Date();
        return today.toDatenumber;
    }
    export function formateDate (date:Date): number
    {
        const day = date.getDate();
        const month = date.getMonth(); 
        return `${month}/${day};
    }
  }
console.log(DateUtils.getCurrentDate());         
console.log(DateUtils.formatDate(new Date()));
    