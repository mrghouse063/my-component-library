Project title: Front-End Components Assignment
Submitted By: Mohammed Ghouse Peer
Date of Submission: 05/10/2024

About My Project

For this assignment, I built two small front-end components using React and TypeScript.
The main goal was to understand how to create reusable UI parts, test them properly, and view them inside Storybook.

I worked on everything step-by-step — setting up the project, creating the components, testing them, and finally running them inside Storybook.

Components I Created
🔹 InputField

This component is a normal input box with a label, placeholder, and error message.
It also supports different input types (like text and password).
If there’s an error, the border turns red and an error message is shown below it.

🔹 DataTable

This component shows a table with dynamic data.
It can display columns like Name, Email, and Age, and it fills the table with data that’s passed from props.
It’s designed to be reusable for any kind of data set.

What I Used

React + TypeScript → to build and type the components

Vite → for fast development

Storybook → to show and test the UI visually

Vitest → for unit testing

Tailwind CSS → for quick, clean styling

How to Run the Project

Start the development app:

npm run dev


→ Opens on http://localhost:5173

Run Storybook:

npm run storybook


→ Opens on http://localhost:6006

Run the tests:

npx vitest


→ Shows “all tests passed ✅” in the terminal.

What I Learned

This project taught me how to:

Build reusable front-end components.

Use Storybook to document and view my components.

Write tests using Vitest and make sure everything works correctly.

Keep my project clean and organized.

It took some time to fix a few errors and learn how Storybook connects with components, but once it worked, it felt really good to see everything running smoothly.