const { promises: fs } = require('fs');
class FileContainer{
    constructor(route){
        this.route = route
    }
    async getProduct(id){
        const objs = await this.productsList();
        const findObj = objs.find(e => e.id === id);
        return findObj;
    }
    async productsList(){
        try{
            const products = await fs.readFile(this.route, 'utf-8');
            return JSON.parse(products);
        }
        catch(err){
            return [];
        }
    }
}
module.export = FileContainer;