const path	= require("path")
module.exports = class ApiAppGenerator{
	/*
		create an app.js file with all the basic settings
	*/
	constructor(path){
		this.folderApp_path = path.join(path, "app.js");
		this.indexFolderPaths 	= {
			"routes"	 : "const indexRoutes 	    = require('./routes/indexRoutes'); \r\n",
			"middlewares": "const indexMiddlewares  = require('./middlewares/indexMiddlewares'); \r\n",
			"apiServices": "const indexApiServices  = require('./apiServices/indexApiServices'); \r\n",
			"services"	 : "const indexServices 	= require('./services/indexServices'); \r\n"
		}
		this.importModules 	= {
			"express" 	: "const express = require('express'); \r\n",
			"cors" 		: "const cors 	 = require('cors'); \r\n",
			"morgan" 	: "const morgan  = require('morgan'); \r\n"
		};
		this.importModuleDepsData 	= `${this.importModules.express} ${this.importModules.cors} ${this.importModules.morgan}`;

		this.indexFolderPathsData	= `${this.indexFolderPaths.routes} ${this.indexFolderPaths.services} ${this.indexFolderPaths.middlewares} ${this.indexFolderPaths.apiServices}`


		this.appConfig = {
			"app_instance" :"const app = express();  \r\n",
			"json_config" :"app.use(express.json());  \r\n",
			"url_config" :"app.use(express.urlencoded({extended : true}));  \r\n",
			"morgan_config" :"app.use(morgan('dev'));  \r\n",
			"cors_config" :"app.use(cors());  \r\n",
			"app_routes" : "app.use(indexRoutes); \r\n"
		}
	}
}
