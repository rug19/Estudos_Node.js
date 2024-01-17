import { error } from "console";
import * as fs from "fs";

fs.readFile('arquivo.json', (error, data) => {
    if(error){
        console.error(error);
    }

    console.log(data.toString())
});
