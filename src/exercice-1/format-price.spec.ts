
import { formatPrice } from './format-price';

const d = 56.6846515

import {test, it, describe, expect} from 'vitest';
    describe(("Doit retourner 56,68"), function(){
        test("Niveau 1", function(){
            expect(formatPrice(d)).toEqual("56,68")
        })
        ;
        
        test("Doit retourner 56,,68", function(){
            expect(formatPrice(d, {decimal:",,", milliers:"_"} )).toEqual("56,,68")   
        })
 
        
        
        
        
        // TextDecoderStream()
        
        





    });





