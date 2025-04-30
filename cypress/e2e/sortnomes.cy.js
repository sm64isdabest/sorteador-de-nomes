describe('Sorteador', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('Tudo preenchido', () => {
    cy.get('#nomes').type('Lucas\nJoão\nMaria\nAna')
    cy.get('#quantia').type('2')
    cy.contains('Sortear').click()
    cy.get('span').should('not.be.visible')
    cy.get('#resultado').contains('Sorteados:')
  })

  it('Tudo vazio', () => {
    cy.get('#nomes').should('be.empty')
    cy.get('#quantia').should('be.empty')
    cy.contains('Sortear').click()
    cy.get('span').should('be.visible')
  })

  it('Campo nomes vazio', () => {
    cy.get('#nomes').should('be.empty')
    cy.get('#quantia').type('2')
    cy.contains('Sortear').click()
    cy.get('span').should('be.visible')
  })

  it('Campo quantia vazio', () => {
    cy.get('#nomes').type('Lucas\nJoão\nMaria\nAna')
    cy.get('#quantia').should('be.empty')
    cy.contains('Sortear').click()
    cy.get('span').should('be.visible')
  })
})