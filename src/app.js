const command = process.argv[2];
const {listCats,addCat, updateCat, deleteCat} =  require("./cat/cat.methods")

const app = async () => {
    switch(command){
        case "list":
            await listCats();
            break;

        case "add":
            const newBreed = {
            breed: process.argv[3],
            adoptionCost: process.argv[4],
            numbers: process.argv[5]
            }
           await addCat(newBreed);
           break;           
        case "delete": 
        //process.argv[3]>>>film name
            deleteCat(process.argv[3]);    
            break;
        case "update":
            //processargv[3]>>>Cat breed
            //processargv[4]>>>updated numbers of cats 
            updateCat(process.argv[3], process.argv[4])  
            break;  
        default:
            console.log("\nInvalid Command")    
    }
};


app();


