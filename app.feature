Feature: Name Sorter

    Scenario: All fields filled
        Given I visit the "index.html" page
        And I fill the "nomes" field with "Lucas João Maria Ana"
        And I fill the "quantia" field with "2"
        When I click the "Sortear" button
        Then the "span" element should not be visible
        And the "resultado" field should contain "Sorteados:"

    Scenario: All fields empty
        Given I visit the "index.html" page
        And the "nomes" field is empty
        And the "quantia" field is empty
        When I click the "Sortear" button
        Then the "span" element should be visible

    Scenario: "nomes" field empty
        Given I visit the "index.html" page
        And the "nomes" field is empty
        And I fill the "quantia" field with "2"
        When I click the "Sortear" button
        Then the "span" element should be visible

    Scenario: "quantia" field empty
        Given I visit the "index.html" page
        And I fill the "nomes" field with "Lucas João Maria Ana"
        And the "quantia" field is empty
        When I click the "Sortear" button
        Then the "span" element should be visible