
    describe("Test for the getTotalPoints function",()=>{
        it ('It should return a total score 8 for input wddwl.', ()=>{
            const result1 = getTotalPoints('wddwl')
            expect(result1).toEqual(8)
        })
    })


    describe("Test for the orderTeams function",()=>{
        it ('It should log to console about name & point for each team.', ()=>{
            const chelsea = {name : "Chelsea", results : 'ddwwl'}
            const manU = {name : "ManU", results :"dldll"}
            const manCity = {name : "ManCity", results : 'wdwdw'}
            const liverpool = {name : 'Liverpool', results : 'wdldw'}
            const result2 = orderTeams(chelsea,manU,manCity,liverpool)
            expect(result2).toBe('Chelsea: 8\nManU: 2\nManCity: 11\nLiverpool: 8')
        })
    })
