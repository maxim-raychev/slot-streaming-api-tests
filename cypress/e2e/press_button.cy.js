const url = '/buttons'
const arcade_number = Cypress.env('arcade_number')
const gid = Cypress.env('gid')
const pressButtonBody = {
    "arcade_number": arcade_number,
    "gid": gid,
    "button_mask": 1                                  
}

describe('Press button', ()=> {
    it('should return status 200', ()=> {
        cy.request({
            method: 'POST',
            url: url,
            body: pressButtonBody
        }).then(({status})=> {
            expect(status).eql(200)
        })
    })
    it('should return success', ()=> {
        cy.request({
            method: 'POST',
            url: url,
            body: pressButtonBody
        }).then(({body})=> {
            expect(body.status).to.eql('success')
        })
    })
    it('should return correct message', ()=> {
        cy.request({
            method: 'POST',
            url: url,
            body: pressButtonBody
        }).then(({body})=> {
            expect(body.message).to.eql('1')
        })
    })  
})