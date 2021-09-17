const Cat = require("./Cat.model");



exports.listCats = async () =>{
    try{
        const list = await Cat.findAll();
        list.map(Cat => console.log(Cat.dataValues));
        
    }catch(error){
        console.log(error)
    }
}

exports.addCat = async (CatObj) =>{
    try{
        // await Cat.sync();
        await Cat.create(CatObj)
    }catch (error){
        console.log(error)
    }
}


exports.updateCat = async (catBreed,newNumber) =>{
    try{
        await Cat.update({numbers: newNumber},{
            where: {
                breed: catBreed
            }
        })
    }catch(error){
        console.log(error)
    }
}

exports.deleteCat = async (catBreed) =>{
    try{
        await Cat.destroy({
            where:{
                breed: catBreed
            }
        })
            
    }catch(error){
        console.log(error);
    }
}
