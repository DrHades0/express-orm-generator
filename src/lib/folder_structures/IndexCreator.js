const path  = require("path");
const fs 	= require("fs");
module.exports = class IndexFileCreator{
	/* Create and indexFile with name passed for constructor */
	constructor(folderPath, name){
		this.indexName = `index${name}.js`;
		this.IndexPath = path.join(folderPath,this.indexName);

		this.CreateFile();
	}

	CreateFile(){
		fs.writeFileSync(this.IndexPath, "");
	}

}
