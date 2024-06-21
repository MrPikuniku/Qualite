import {formatDate} from './format-date'; 

import {test, it, describe, expect} from 'vitest';

let today = new Date();

let lundi = new Date('December 17, 1995 03:24:00');

let mardi = new Date('December 18, 1995 00:00:00');

let jeudi = new Date('January 19, 1995');

describe(("Test de la fonction formatDate()"), function(){

    test("Si aucune date n’est spécifiée, la date courante devra être utilisée par défaut ", function(){
        expect(formatDate(today)).toEqual(today.toLocaleDateString('fr-FR'));
    })
    ;

    test("la fonction retournera une date formatée avec la notation française par défaut: dd/mm/yyyy", function(){
        expect(formatDate(lundi)).toEqual(lundi.toLocaleDateString('fr-FR'));

    })

    test("avec inclusion de l’heure et des minutes", function(){
        expect(formatDate(lundi,{afficheHeure:true,affichePoints:true, separateur:"à"})).toEqual(`${lundi.toLocaleDateString('fr-FR')} à ${lundi.getHours()}:${lundi.getMinutes()}` );

    })

    test("sans l'inclusion de l'heure et des minutes  ", function(){
        expect(formatDate(lundi)).toEqual(`${lundi.toLocaleDateString('fr-FR')}` );

    })

    test("test avec h comme séparateur", function(){
        expect(formatDate(lundi, {afficheHeure:true,affichePoints:false, separateur:"à"})).toEqual(`${lundi.toLocaleDateString('fr-FR')} à ${lundi.getHours()}h${lundi.getMinutes()}`);

    })

    test("test avec : comme séparateur", function(){
        expect(formatDate(lundi, {afficheHeure:true,affichePoints:true, separateur:"à"})).toEqual( `${lundi.toLocaleDateString('fr-FR')} à ${lundi.getHours()}:${lundi.getMinutes()}`);

    })


    /*test("test pour gérer les erreur", function(){
        expect(formatDate(jour)).toEqual(jour.`` toDateString());

    })*/

    
});

