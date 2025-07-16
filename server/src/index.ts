import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./database/dataSource.js";

const app = express();
const port = 3000;

AppDataSource.initialize()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => {
		console.log("Error during Data Source initialization", error);
	});
