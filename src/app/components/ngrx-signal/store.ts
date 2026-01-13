import { ProductModel } from "../../models/product-model.model"

export type ShopState {
    products:ProductModel[];
    cart:ProductModel[]
}
const initState: ShopState = {
    products: [],
    cart:[]
} 
