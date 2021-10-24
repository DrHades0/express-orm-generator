const path  = require("path");
const fs 	= require("fs");
module.exports = class IndexFileCreator{
	constructor(folderPath, name){
		this.indexName = `index${name}.js`;
		this.IndexPath = path.join(folderPath,this.indexName);

		this.CreateFile();
	}

	CreateFile(){
		fs.writeFileSync(this.IndexPath, "");
	}

}
