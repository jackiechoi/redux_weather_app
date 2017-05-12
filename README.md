#ReduxWeatherApp


Weather forecast browser web app that lets users search for cities and retrieve weather data: temperature, pressure, humidity.
- Using a third-party API that retrieves forecasted weather data for the next 5 days from the point of the search
- The app will then store and display the data in a table with rows that become added every time a search is run
- Columns: city, temperature, pressure, humidity. Weather data will be shown in charts

Challenges to solve:
#Making AJAX requests with redux

#Third-party library to draw charts and use react component already developed and integrate into the project

#Dealing with Redux app in which the state is changing significantly

Components
1. SearchBar: modifies the state of the application by dispatching action / calling action creator. When a user enters a search term, this component makes an API request
2. ForecastList: table
3. Chart: reusable component
4. App: overall component that ties the rest of components together
