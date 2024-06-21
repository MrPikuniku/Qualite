export type FormatDateConfig = {
    afficheHeure: boolean,
    affichePoints: boolean,
    separateur: string
};

export function formatDate(d?: Date, config?: FormatDateConfig) : string {
    if(d != null ){    
        if(config?.afficheHeure==true){
            if(config?.affichePoints==true){
                return `${d.toLocaleDateString('fr-FR')} ${config?.separateur} ${d.getHours()}:${d.getMinutes()}`;
            }


            return `${d.toLocaleDateString('fr-FR')} ${config?.separateur} ${d.getHours()}h${d.getMinutes()}` ;
            
        }

        else{
            return d.toLocaleDateString("fr-FR");
        }
    }

    

    

    
    return "";
}    

let mardi = new Date('December 18, 1995 22:15:00')  //                  .toLocaleDateString('fr-FR');

let heure = new Date('December 18, 1995 22:15:00').getHours()

let joaur = new Date(); // .toLocaleDateString('fr-FR')

let joaur2 = new Date();



console.log(joaur.toLocaleTimeString() == joaur2.toLocaleDateString())


formatDate(joaur)

    
