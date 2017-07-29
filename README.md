# Eat Da Burger
A MySQL ORM application using Handlebars for HTML processing


Installation:

1. Clone the Github repo.
2. Type 'npm start' at the command prompt.
3. Enjoy the ride!

Note:  If installation fails for a reason related to MySQL not being found, you may need to manually start your MySQL server 
and alter the 'poststart' key of the package.json file by removing the 'sh setup/launch.sh &&' portion of that value string.
This installation script was tested on a Mac OSX operating system with a standard Bash shell environment.  Bash emulators may encounter errors.


Usage:

Add burgers using the input box at the bottom of the screen.
The burger list will populate on the left.
To eat burgers, simply click on their respective 'Devour It!' buttons 
and watch as they switch to the appropriate column.


This application utilizes a Node.js server with backend Node scripting and frontend Javascript.
The HTML/CSS design uses Bootstrap components with Handlebars as the templating engine.
The database interaction is handle with ORM.  The application uses multiple npm packages as detailed
in the package.json file dependencies object, as well as build in packages native to Node.js.
