


# Football API Project


My first api project . I use a football API to display league standings and top scorers across the 5 big leagues across europe

Link: https://footy-stats-3wp3.onrender.com/

This project is a web application that provides users with information about the top football teams and goal scorers in Europe. The application fetches data from a football data API and displays it using server-side rendered EJS templates. The project is built using Node.js and Express.

## Features

- **Top Teams**: Displays a list of the top-performing football teams from various European leagues.
- **Top Scorers**: Shows the leading goal scorers across several European football leagues.

## File Structure

The project includes the following key files:

### EJS Templates

1. **goals.ejs**
   - Displays the top goal scorers in Europe.
   - Organizes the data by league and lists the top scorers from each.

2. **index.ejs**
   - The homepage of the application.
   - Provides navigation links to view top teams and top scorers.

3. **teams.ejs**
   - Displays the top teams in Europe.
   - Organizes the data by league and lists the top 5 teams from each.

### JavaScript Files

1. **index.js**
   - The main server file that sets up the Express application and routes.
   - Handles API requests to retrieve data on top teams and top scorers.
   - Renders the appropriate EJS templates with the data fetched from the API.

## API Integration

The project uses the [Football-Data.org](https://www.football-data.org/) API to fetch information about football teams and players. The API token is required to authenticate the requests.

### Key API Endpoints Used

- **Top Scorers**: Fetches the top goal scorers from the following leagues:
  - Serie A (Italy)
  - Bundesliga (Germany)
  - Premier League (England)
  - Ligue 1 (France)
  - La Liga (Spain)

- **Top Teams**: Fetches the top 5 teams from the standings of the same leagues mentioned above.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/football-api-project.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd football-api-project
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up API Token**:
   - Replace the placeholder API token in `index.js` with your own from Football-Data.org.

5. **Start the application**:
   ```bash
   node index.js
   ```

6. **Open your web browser** and navigate to `http://localhost:3000`.

## Usage

- **Homepage**: Start at the homepage and choose whether to view the top teams or top scorers.
- **Top Teams**: Navigate to `/in-form-teams` to see the top 5 teams in the major European leagues.
- **Top Scorers**: Navigate to `/top-scorers` to see the top goal scorers across various European leagues.

## Dependencies

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **EJS**: Templating engine to generate HTML markup with plain JavaScript.

## License

This project is licensed under the MIT License.

---
