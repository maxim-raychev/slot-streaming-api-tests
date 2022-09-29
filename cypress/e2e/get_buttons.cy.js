const arcade_number = Cypress.env('arcade_number')
const gid = Cypress.env('gid')
const url = '/slots/' + arcade_number + '/game/' + gid + '/buttons'
const responseBody = {
    "arcade_number": arcade_number,
    "gid": gid, 
    "layout": [
        {
            "name": "\"Start / Skip /Take win\"",
            "mask": 1
        },
        {
            "name": "\"Max Bet (Black)\"",
            "mask": 2
        },
        {
            "name": "\"Bet one (Red)\"",
            "mask": 4
        },
        {
            "name": "\"hold 1 /line 1\"",
            "mask": 8
        },
        {
            "name": "\"hold 2 /line 3\"",
            "mask": 16
        },
        {
            "name": "\"hold 3 / line 5\"",
            "mask": 32
        },
        {
            "name": "\"hold 4 /line 7\"",
            "mask": 64
        },
        {
            "name": "\"hold 5 /line 9\"",
            "mask": 128
        },
        {
            "name": "\"Collect (cashout)\"",
            "mask": 256
        },
        {
            "name": "\"select game\"",
            "mask": 512
        },
        {
            "name": "\"autostart\"",
            "mask": 1024
        },
        {
            "name": "\"info\"",
            "mask": 2048
        }
    ]
}

describe('GET all buttons test', () => {
    it('should return status 200', () => {
        cy.request(url).then(({status})=> {
            expect(status).equal(200)
        })
    })
    it ('should return correct list of buttons', ()=> {
        cy.request(url).then(({body})=> {
            expect(body).to.eql(responseBody)
        })
    })
})
