const arcade_id = 1
const url = '/arcades/' + arcade_id + '/slots'

describe("GET Slots by arcade id tests", () => {
    it('should return status 200', () => {
        cy.request(url).then(({status})=> {
            expect(status).to.eql(200)
        })
    })
    
    it('should contains list of 1 slots', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body).to.have.length(1)
        })
    })

    it('should have correct logo', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].logo).contain('Logo=Novomatic.svg')
        })
    })

    it('should have correct game id', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].gid).to.eql('H711')
        })
    })

    it('should have correct body', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].body).to.eql('FV 623')
        })
    })
    it('should have correct denomination', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].denomination).to.eql('0.05')
        })
    })
    it('should have correct game title', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].game).to.eql('Gaminator')
        })
    })
    it('should be active', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].is_active).to.eql(true)
        })
    })
    it('should have correct arcade number', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].arcade_number).to.eql('9106')
        })
    })
})