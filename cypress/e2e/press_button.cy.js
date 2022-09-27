const url = '/buttons'
const pressButtonBody = {
    "arcade_number": "9106",
    "gid": "H711",
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