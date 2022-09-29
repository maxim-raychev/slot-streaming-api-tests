const arcade_id = Cypress.env('arcade_id')
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
            expect(body[0].logo).to.eql(Cypress.env('logo'))
        })
    })

    it('should have correct game id', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].gid).to.eql(Cypress.env('gid'))
        })
    })

    it('should have correct body', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].body).to.eql(Cypress.env('body'))
        })
    })
    it('should have correct denomination', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].denomination).to.eql(Cypress.env('denomination'))
        })
    })
    it('should have correct game title', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].game).to.eql(Cypress.env('game'))
        })
    })
    it('should be active', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].is_active).to.eql(true)
        })
    })
    it('should have correct arcade number', ()=> {
        cy.request(url).then( ({body}) => {
            expect(body[0].arcade_number).to.eql(Cypress.env('arcade_number'))
        })
    })
})