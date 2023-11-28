
    describe("Test for the calcPoints function",()=>{
        it ('It should return a total point 7 for card 2,5', ()=>{
            const hand =[
                {displayVal: 'Two', val : 2, suit:'clubs'},
                {displayVal: 'Five', val : 5, suit:'diamonds'},
            ];
            
            const result = calcPoints(hand)
            expect(result.total).toEqual(7)
            expect(result.isSoft).toEqual(false)
        })
    })

    describe("Test for the calcPoints function with 1 Ace & soft",()=>{
        it ('It should return a total point 17 with soft Ace & 6', ()=>{
            const hand =[
                {displayVal: 'Six', val : 6, suit:'clubs'},
                {displayVal: 'Ace', val : 1, suit:'diamonds'},
            ];
            
            const result = calcPoints(hand)
            expect(result.total).toEqual(17)
            expect(result.isSoft).toEqual(true)
        })
    })

    describe("Test for the calcPoints function with 1 Ace & not soft",()=>{
        it ('It should return a total point 7 with not soft Ace & 6', ()=>{
            const hand =[
                {displayVal: 'Six', val : 6, suit:'clubs'},
                {displayVal: 'Ace', val : 1, suit:'diamonds'},
            ];
            
            const result = calcPoints(hand)
            expect(result.total).toEqual(7)
            expect(result.isSoft).toEqual(false)
        })
    })

    describe("Test for the calcPoints function with multiple Ace & soft",()=>{
        it ('It should return a total point 30 with 2 soft Ace & 8', ()=>{
            const hand =[
                {displayVal: 'Nine', val : 8, suit:'clubs'},
                {displayVal: 'Ace', val : 1, suit:'diamonds'},
                {displayVal: 'Ace', val : 1, suit:'hearts'},
            ];
            
            const result = calcPoints(hand)
            expect(result.total).toEqual(20)
            expect(result.isSoft).toEqual(true)
        })
    })

    describe("Test for the calcPoints function with multiple Ace & not soft",()=>{
        it ('It should return a total point 10 with 2 not soft Ace & 8', ()=>{
            const hand =[
                {displayVal: 'Nine', val : 8, suit:'clubs'},
                {displayVal: 'Ace', val : 1, suit:'diamonds'},
                {displayVal: 'Ace', val : 1, suit:'hearts'},
            ];
            
            const result = calcPoints(hand)
            expect(result.total).toEqual(20)
            expect(result.isSoft).toEqual(false)
        })
    })
