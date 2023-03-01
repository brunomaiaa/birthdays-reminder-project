Birthday Reminder Project using Vite JS
=======================================

This is a simple birthday reminder project built using Vite JS and React. It displays a list of birthdays of people whose birthdays are today. It also provides an option to clear all the displayed birthdays.

React Topics Utilized
---------------------

This project utilizes some of the core concepts of React. Here are some of the topics that are utilized in this project:

-   Components: The project is built using React components. The App component is the main component that renders the birthday reminder. The List component is a child component of the App component that renders the list of people whose birthdays are today.

-   Props: The List component receives props from the App component. The birthdayList prop is an array of objects that contains the data of people whose birthdays are today. This prop is used to render the list of people.

-   Map function: The List component utilizes the map function to iterate over the birthdayList array and render a list of people. The map function is a built-in method in JavaScript that creates a new array by calling a function for each element of an array.

-   useState Hook: The App component utilizes the useState hook to manage the state of the birthdayList array. The useState hook is a built-in hook in React that allows you to add state to functional components.

By utilizing these React concepts, this project demonstrates how to build a simple but effective birthday reminder using Vite JS and React.

Project Structure
-----------------

The project has the following structure:

-   App.jsx: This is the main component that renders the birthday reminder.

-   List.jsx: This component renders the list of people whose birthdays are today.

-   data.js: This file contains the data of people whose birthdays are today.

-   App.css: This file contains the CSS styles for the App component.

Built With
----------

-   [Vite JS](https://vitejs.dev/) - Build tool and development server.

-   [React](https://reactjs.org/) - JavaScript library for building user interfaces.

Authors
-------

-   Bruno Maia