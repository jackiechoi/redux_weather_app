#ReduxWeatherApp


Weather forecast browser web app that lets users search for cities and retrieve weather data: temperature, pressure, humidity.
- Using a third-party API that retrieves forecast weather data for the next 5 days from the point of the search
- The app will then store and display the data in a table with rows that become added every time a search is run
- Columns: city, temperature, pressure, humidity. Weather data will be shown in charts

Challenges to solve:
#Making AJAX requests with redux

#Third-party library to draw charts and use react component already developed and integrate into the project

#Dealing with Redux app in which the state is changing significantly

Components
1. SearchBar
    - It modifies the state of the application by dispatching action / calling action creator. When a user enters a search term, this component makes an API request
    - SearchBar will function as a container as opposed to a pure react component, as it needs to communicate with Redux
2. WeatherList: table
3. Chart: reusable component
4. App: overall component that ties the rest of components together

Things to note:
- Constant for an action type in ActionCreator: In this app, fetchWeather has a constant for an action type that 
defines specific action type in the return statement as well as in reducers. Much less error-prone this way!
- Use of middleware, ReduxPromise: this handles the promise received while using Axios (library that makes AJAX 
requests). ReduxPromise is particularly helpful as it automatically detects the payload of the promise and stops that
 action and waits for the promise to resolve. Once promise resolves, it takes the data coming back from request, 
 assigns it on the payload property and sends the action to all the reducers in the application. This way, writing 
 call-back functions is unnecessary.
- Not mutating the state: Never modifying the state directly, the reducer_weather returns a new object that will take
 the place of the existing state.
- Sparklines library: provides a quick glance of data displayed in charts
