Feature: Movie Search Functionality

  Scenario: Search for movies by title
    Given the user is on the movie search app
    When the user enters "Inception" in the search bar
    And the user clicks the "Search" button
    Then the app should display a list of movies matching the title "Inception"

  Scenario: Show no movies found message
    Given the user is on the movie search app
    When the user enters "NonExistentMovie" in the search bar
    And the user clicks the "Search" button
    Then the app should display "No movies found."
