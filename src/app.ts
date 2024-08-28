import "dotenv/config"
import express from "express";
import cors from "cors";
import dbInit from './user/insfrastructure/db/mongo';
import userRoute from './user/insfrastructure/routes/user.routes';

const app = express();

app.use(cors());

app.use( express.json() ); // for parsing application/json

app.use(userRoute);

dbInit().then();

const port = process.env.POST ?? 3001;

app.listen(port, () => {
  console.log(`Listen on Port: ${port}`);
});