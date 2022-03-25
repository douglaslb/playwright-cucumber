Feature: Match color using Cucumber context

    Scenario: I set a color and should validate the color between two steps
        Given My color is "red"
        Then My color should be red
        