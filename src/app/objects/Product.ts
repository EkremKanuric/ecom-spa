import { Image } from "../interfaces/Image"; 

export class Product{
    
    private _productId : number;
    private _productHead : string;
    private _productDescription : string;
    private _productImage : Image;
    private _productPrice : number;
    
    
    constructor(productId : number = 0, 
                productHead : string = "", 
                productDescription : string = "",
                productImage : Image = {
                    alt : "",
                    link : ""
                },
                productPrice : number = 0){  
        this._productId = productId;
        this._productHead = productHead;
        this._productDescription = productDescription;
        this._productImage = productImage;
        this._productPrice = productPrice;
    }


//#region Props
    
    get ProductHead() : string {
        return this._productHead;
    }

    get ProductDescription() :string{
        return this._productDescription;
    }

    get ProductImage() : Image{
        return this._productImage;
    }

    get ProductPrice() : number {
        return this._productPrice
    }

//#endregion

//#region Methods

    Price(amountOfProduct : number) : number {
        return this.ProductPrice * amountOfProduct;
    }
//#endregion


}