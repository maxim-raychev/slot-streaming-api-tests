describe('GET Arcades Tests', ()=> {
    it('should return status 200', ()=> {
        cy.request('/arcades').then( ({status})=> {
            expect(status).eql(200)
        })
    })
    it('should contains list of 2 arcades', ()=> {
        cy.request('/arcades').then( ({body}) => {
            expect(body).to.have.length(2)
        })
    })
    it('should have correct first arcade name', ()=> {
        cy.request('/arcades').then( ({body}) => {
            expect(body[0].name).to.eql('Студия 1')
        })
    })
    it('should have correct first arcade number', ()=> {
        cy.request('/arcades').then( ({body}) => {
            expect(body[0].arcade_number).to.eql('9106')
        })
    })

    it('should have correct second arcade name', ()=> {
        cy.request('/arcades').then( ({body}) => {
            expect(body[1].name).to.eql('Студия 2')
        })
    })
    it('should have correct second arcade number', ()=> {
        cy.request('/arcades').then( ({body}) => {
            expect(body[1].arcade_number).to.eql('50')
        })
    })

})