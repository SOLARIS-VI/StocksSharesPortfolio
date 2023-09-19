# Stocks & Shares Portfolio

**BRIEF:**

A local trader has approached our team with a portfolio of shares. They want to be able to analyze it more effectively. They have a small sample dataset to give you and would like you to build a Minimum Viable Product that uses the data to display their portfolio so that they can make better decisions when choosing stocks and shares.

**MVP**

The user should be able to:

1. View total current value.
2. View individual and total performance trends.
3. Retrieve a list of share prices from an external API and allow the user to add shares to her portfolio.
4. View a chart of the current values in her portfolio.

**EXTENSIONS:**

1. Speculation based on trends and further financial modeling using projections.
2. Include add and delete buttons for shares.
3. Add a pie chart to one of the webpages.
4. Add a candle chart to one of the webpages.

# Technologies Used

- JavaScript
- React
- Node.js
- Google Charts

# JavaScript Group Project Guidelines

**Aims:**
- To gain experience working in a team with other developers
- To understand some of the challenges this creates and ways to overcome them.
- To have the opportunity to use Agile working methods.
- To become more confident using Git/GitHub for a multi-person project.
- To consolidate learning from the JavaScript module.
- To investigate some JavaScript libraries you haven't used before (learning how to read docs is an invaluable skill).

**Expectations:**
- All members of the group contributing to the planning, development, and presentation of the project.
- Members supporting each other to ensure everyone can get the most they can from the week.
- TDD - unit testing of models where appropriate.
- Some application of Agile concepts e.g., a morning standup, sprints, a kanban board (Trello).
- Regular Git commits and use of branches with frequent merges. We are looking to see at least 100 commits.

**Initial Planning:**
- Learning Goals of Team Members:
  At the start of the project, have a discussion to establish what everyone wants to get out of it. Some people may be more focused on practicing 
  what they’ve already learned, some may be keen to try out something new, some people may have a preference for what area they want to focus on. 
  Find a way of enabling team members to reach their learning goals while ensuring all parts of the application get built.

**MVP:**
- Plan thoroughly so you’re all clear about the aim for the end result. Set out an MVP that doesn't contain any
  features that are not crucial to the functioning of the application. Split the project into small features to tackle one at a time.

**Setup:**
- It can work well to set up the basic app, directories, etc., together first so you all understand the
  core structure before you split up to work on different features. Use git branches and commit and merge regularly.

**Helpful Hints to Avoid Common Gotchas:**

APIs:
- Investigate the APIs you are planning to use and make sure you can get the data back you need
  into your application before writing code dependent on that API.

- Check for daily/hourly usage limits.

- When making a request to an API, if you get a CORS error in the console, speak to an instructor
  and we'll give you notes on making server-side requests, which will solve the problem.

- Don't push your API keys up to GitHub.

**How to Run the Project:**
To run the project locally, follow these steps:

Installs:

API
In terminal:
- npm i finnhub
- npm i querystring-es3

Then:

1. Open client > node_modules > react-scripts > config > webpack.config.js
2. Command-F and search for "fallback"
3. In "resolve" object, add: fallback:

{
"querystring": require.resolve("querystring-es3"),
},

Node Modules
In terminal:
- npm install

Run Client & Server
Open two terminals within VScode or chosen IDE:
cd into the project the cd into client then run npm start 
Repeat steps for server.



