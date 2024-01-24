const fs = require('fs')

const path = require('path');

const productDbPath = path.join(__dirname, '../db/product.json');

module.exports = class Product {
    constructor(
        name,
        price
    ) {
        this.name = name;
        this.price = price;

    };

    async save(){
        fs.readFile(productDbPath, 'utf8', (err, data) => {
            if(err){
                console.error(err);
                return;
            }


            data.push({name: this.name, price: this.price, id: data.length + 1})
            fs.writeFile(productDbPath, JSON.stringify(data), 'utf8', (err) => {
                if(err){
                    console.error(err);
                    return;
                }
            })
        });

    }
};