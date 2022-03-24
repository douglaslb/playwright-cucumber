Feature: Search user at Github

    Scenario: I search an user at Github
        Given I open GitHub website
        When I search for douglaslb user and click enter
        When I click on users tab
        When I click on Douglas Lima name
        Then I make an axios request to validate the username
        