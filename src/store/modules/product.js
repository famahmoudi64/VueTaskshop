const product = {
    namespaced:true,
    state:{
        products:[
            {
                id:1,
                img :'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1',
                name:'iphone15',
                description:'this mobile is iphone 15. and its the new iphone in markeing',
                price:300
            },
            {
                id:2,
                img :'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1',
                name:'iphone14',
                description:'this mobile is iphone 14. and its the new iphone in markeing',
                price:350
            },
            {
                id:3,
                img :'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1',
                name:'iphone13',
                description:'this mobile is iphone 13. and its the new iphone in markeing',
                price:350
            },
            {
                id:4,
                img :'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1',
                name:'iphone12',
                description:'this mobile is iphone 11 256G. and its the new iphone in markeing',
                price:650
            }
        ]

    },
    getters:{
        allproducts(state) {
            return state.products
        }
    },
}
export default product
