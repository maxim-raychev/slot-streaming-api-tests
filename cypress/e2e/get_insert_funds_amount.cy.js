const url = '/funds/insert/amounts'
const responseBody = [
    {
        "id": 1,
        "amount": 500
    },
    {
        "id": 2,
        "amount": 1000
    },
    {
        "id": 3,
        "amount": 1500
    },
    {
        "id": 4,
        "amount": 2000
    },
    {
        "id": 5,
        "amount": 2500
    },
    {
        "id": 6,
        "amount": 3000
    }
]

describe('GET insert funds amount list', () => {
    it('should return status 200', () => {
        cy.request(url).then(({status}) => {
            expect(status).equal(200)
        })
    })
    it('should return correct list of funds amounts', () => {
        cy.request(url).then(({body}) => {
            expect(body).to.eql(responseBody)
        })
    })
})