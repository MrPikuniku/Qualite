


const d = 56.6846515

import {test, it, describe, expect} from 'vitest';
    describe("Doit retourner ", function(){
        test("Niveau 1", function(){
            expect(formatPrice(d) == d.toFixed(2).replace('.',',').toString().replace(/\B(?=(\d{3})+(?!\d))/g,  ' ' ).toString())
        }

        // TextDecoderStream()
        
        );





    })





