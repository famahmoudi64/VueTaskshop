# Vue.js Application with Vuex State Management

This is a web application built with vue.js, leveraging the Composition API for dynamic and reactive task management and utilizing Vuex for state management. The application is divided into two main parts: Task Management and Products.

## Features

- Vue.js for building dynamic and reactive user interfaces.
- Vuex for state management to handle complex data and component interactions.
- Task Management:
  - Fetch and display task data from a fake API.
  - Manage tasks (delete, mark as done, create new tasks).
  - Filter tasks to limit the number of displayed tasks.
- Product Management:
  - Small online shop functionality using Vuex.
  - Add products to the cart.
  - Track quantities and calculate the total price.
  - Remove unwanted products from the cart.

## Technologies Used

- Vue.js
- Vuex
- Bootstrap
- Fake API (for task data)

## Getting Started
Before you begin, ensure that you have Node.js installed on your machine. If not, you can download and install it from https://nodejs.org/.

To run this application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/famahmoudi64/VueTaskshop.git`
2. Navigate to the project directory: `cd VueTaskshop`
3. Install dependencies: `npm install`
4. Install Vue CLI globally (if not installed): `npm install -g @vue/cli`
5. Install Vuex: `npm install vuex`
6. Run the development server: `npm run serve`
7. Open your browser and visit `http://localhost:8080`

## Task Management

Navigate to the Task Management section to view and manage tasks. Tasks are fetched from a fake API, and you can perform actions such as deleting, marking as done, and creating new tasks. Use the filter to limit the number of displayed tasks.

## Product Management

Explore the Product Management section to experience a small online shop powered by Vuex. Add products to the cart, view quantities, and calculate the total price. Remove unwanted products from the cart.

