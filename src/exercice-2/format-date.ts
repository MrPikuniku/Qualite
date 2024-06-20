export type FormatDateConfig = {
    afficheHeure: boolean,
    affichePoints: boolean,
    separateur: string
};

export function formatDate(d?: Date, config?: FormatDateConfig) : string {
    
    return "";
}    

let mardi = new Date('December 18, 1995 22:15:00').toLocaleDateString('fr-FR');

let heure = new Date('December 18, 1995 22:15:00').getHours()

let date = new Date().toLocaleDateString('fr-FR')



console.log(mardi, typeof heure)
    
