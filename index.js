import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_TOKEN = 'f8e6780d6cf34322963ccfc113f0a6ce';
const config = {
  headers: {
    'X-Auth-Token': API_TOKEN,
  },
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  https://api.football-data.org/v4/competitions/SA/scorers
  
  app.get("/top-scorers", async (req, res) => {
    try {
      const goals_ser = await axios.get("https://api.football-data.org/v4/competitions/SA/scorers", config);
      const goals_bun = await axios.get("https://api.football-data.org/v4/competitions/BL1/scorers", config);
      const goals_eng = await axios.get("https://api.football-data.org/v4/competitions/PL/scorers", config);
      const goals_fra = await axios.get("https://api.football-data.org/v4/competitions/FL1/scorers", config);
      const goals_esp = await axios.get("https://api.football-data.org/v4/competitions/PD/scorers", config);

      console.log(goals_ser.data.scorers[0].player.name);
      console.log(goals_ser.data.scorers[1].player.name);
      console.log(goals_ser.data.scorers[2].player.name);

      let italyGoals = [];
      let englandGoals = [];
      let franceGoals = [];
      let spainGoals = [];
      let germanyGoals = [];      
      for(let i=0;i<5;i++){
        let goals = goals_ser.data.scorers[i].goals;
        let name = goals_ser.data.scorers[i].player.name;
         italyGoals.push([name, goals]);
      }
      for(let i=0;i<5;i++){
        let goals = goals_bun.data.scorers[i].goals;
        let name = goals_bun.data.scorers[i].player.name;
         germanyGoals.push([name, goals]);
      }
      for(let i=0;i<5;i++){
        let goals = goals_eng.data.scorers[i].goals;
        let name = goals_eng.data.scorers[i].player.name;
         englandGoals.push([name, goals]);
      }
      for(let i=0;i<5;i++){
        let goals = goals_fra.data.scorers[i].goals;
        let name = goals_fra.data.scorers[i].player.name;
         franceGoals.push([name, goals]);
      }
      for(let i=0;i<5;i++){
        let goals = goals_esp.data.scorers[i].goals;
        let name = goals_esp.data.scorers[i].player.name;
         spainGoals.push([name, goals]);
      }
        res.render("goals.ejs", {data:[{country:"Serie A", scorers:italyGoals},{country:"Premier League", scorers:englandGoals},
        {country:"Bundesliga", scorers:germanyGoals},{country:"Ligue 1", scorers:franceGoals},{country:"La Liga", scorers:spainGoals}]});
      
  
      // You can render your EJS template or send a response here.
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });


  app.get("/in-form-teams", async (req, res) => {
    try {
      const response_ser = await axios.get("https://api.football-data.org/v4/competitions/SA/standings", config);
      const response_bun = await axios.get("https://api.football-data.org/v4/competitions/BL1/standings", config);
      const response_eng = await axios.get("https://api.football-data.org/v4/competitions/PL/standings", config);
      const response_fra = await axios.get("https://api.football-data.org/v4/competitions/FL1/standings", config);
      const response_esp = await axios.get("https://api.football-data.org/v4/competitions/PD/standings", config);


       
        const first5TeamsIta = response_ser.data.standings[0].table.slice(0, 5);
        const first5TeamNamesIta = first5TeamsIta.map((team) => team.team.name);
        console.log(first5TeamNamesIta);

        const first5TeamsEsp = response_esp.data.standings[0].table.slice(0, 5);
        const first5TeamNamesEsp = first5TeamsEsp.map((team) => team.team.name);
        console.log(first5TeamNamesEsp);

        const first5TeamsGer = response_bun.data.standings[0].table.slice(0, 5);
        const first5TeamNamesGer = first5TeamsGer.map((team) => team.team.name);
        console.log(first5TeamNamesGer);

        const first5TeamsEng = response_eng.data.standings[0].table.slice(0, 5);
        const first5TeamNamesEng = first5TeamsEng.map((team) => team.team.name);
        console.log(first5TeamNamesEng);

        const first5TeamsFra = response_fra.data.standings[0].table.slice(0, 5);
        const first5TeamNamesFra = first5TeamsFra.map((team) => team.team.name);
        console.log(first5TeamNamesFra);

       


        res.render("teams.ejs", {teams:[first5TeamNamesEng, first5TeamNamesEsp, 
          first5TeamNamesFra, first5TeamNamesGer, first5TeamNamesIta] });
      
  
      // You can render your EJS template or send a response here.
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });
  
  
  

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });