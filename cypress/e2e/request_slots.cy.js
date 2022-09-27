const url = '/slots/request'
const insertFundsBody = {
    name: "insert-funds",
    args: [
        {
            "name": "arcade_number",
            "value": "9106"
        },
        {
            "name": "gid",
            "value": "H711"
        },
        {
            "name": "amount",
            "value": "1000"
        }
    ]
}

describe('Request Slots', () => {
    it('should return status 200', () => {
        cy.request({
            method: 'POST',
            url: url,
            body: insertFundsBody
        }).then(({status})=> {
            expect(status).eql(200)
        })
    })
    it('should insert funds correctly', () => {
        cy.request({
            method: 'POST',
            url: url,
            body: insertFundsBody
        }).then(({body})=> {
            expect(body.records[0].args[6].value).to.eql('TRANSFER_IS_SUCCESSFUL')
        })
    })
})