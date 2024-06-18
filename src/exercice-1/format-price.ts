export function formatPrice(num: number, separator?:{"decimal": string, "milliers": string}){
    if (isNaN(num)) {
        throw new Error('Le paramètre doit être un nombre');
    }
    let arrondi = num.toFixed(2);
    let virgule = arrondi.replace('.', separator?.decimal ? separator.decimal : ',');
    let millier = virgule.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator?.milliers? separator.milliers: ' ');
    let str:string = millier.toString();
    return str; 
}


console.log(formatPrice(56.684654165654568987911985));

console.log(formatPrice(56.6844654165654568987911985 , {decimal:",," , milliers:"_"} ) );



