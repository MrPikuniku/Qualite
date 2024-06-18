import {formatDate} from './format-date'; 

import {test, it, describe, expect} from 'vitest';

let today = new Date();

let lundi = new Date('December 17, 1995 03:24:00');

let mardi = new Date('December 18, 1995 00:00:00');

describe((""), function(){
    test("", function(){
        expect(formatDate()).toEqual(today.toLocaleDateString('fr-FR'))
    })
    ;

    test("", function(){
        expect(formatDate(jour)).toEqual(jour.toLocaleDateString('fr-FR'));

    })

    test("", function(){
        expect(formatDate(jour)).toEqual(` à ` );

    })

    test("", function(){
        expect(formatDate(jour)).toEqual(jour.``toDateString());

    })
    
});

