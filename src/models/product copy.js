const shortid = require('shortid');

const productArray = [
    {
        id: '123',
        name: 'cake',
        quantity: 20
    }
]

const Product = {
    list: () => {
        return productArray
    },
    find: (id) => {
        let result = null
        productArray.forEach((item,index)=>{
            if(item.id == id){
                result = item
            }
        })
        return result
    },
    create: (params) => {
        params.id = shortid.generate()
        productArray.push(params)
        return params
    },
    update: (id,params) => {
        let isFound = false
        productArray.forEach((item,index)=>{
            if(item.id == id){
                productArray[index] = params
                isFound = true
            }
        })
        if(isFound){
            return params
        }
        else{
            return null
        }
    },
    delete: (id) => {
        let isFound = false
        productArray.forEach((item,index)=>{
            if(item.id == id){
                productArray.splice(index, 1)
                isFound = true
            }
        })
        if(isFound){
            return {id}
        }
        else{
            return null
        }
    },
}

module.exports = Product