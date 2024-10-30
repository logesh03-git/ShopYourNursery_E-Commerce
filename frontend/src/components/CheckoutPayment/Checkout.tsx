import OrderSummary from "../Cart/OrderSummary"
import CheckoutCart from "../CheckoutCart/CheckoutCart"
import { useState, useEffect, useCallback } from "react";
import { products } from "../../constants/products";
import { useCart } from "../../hooks/useCart";
import { productProps } from "../../constants/products";
import { cartItem } from "../../contexts/CartProvider";
import CheckoutEditAddress from "./CheckoutEditAddress";

export type cartProductsType = productProps & cartItem;

const Checkout = () => {
  const [selectedCart,setSelectedCart] = useState(null)

  const [isClicked,setIsClicked] = useState('Add Address')

  const [data,setData] = useState([ 
    {
        name: 'William J',
        apartment:'208',
        street:'preston rd',
        city:'inglewood',
        state:'maine',
        country:'united states',
        zipcode:'98380',
        contact: '(406) 555 -0120',
        email: 'tranthuy.nut1@gamil.com',
   },
   {
        name: 'William',
        apartment:'8502',
        street:'parrys rd',
        city:'inglewood',
        state:'maine',
        country:'united states',
        zipcode:'98380',
        contact: '(406) 555 -0120',
        email: 'tranthuy.nute@gamil.com',
    }
])



  const handleButtonClick = (pass)=>{
    setSelectedCart(pass)
    setIsClicked('Edit Address')
  }

  const handleUpdateData = (updatedData)=>{
    const existingItem = data.find((item)=>item.email ===updatedData.email)

    if(existingItem){
      const updatedArray = data.map((item)=>
        item.email === updatedData.email? updatedData : item
        )
        setData(updatedArray)
    }
    else{
      setData([...data,updatedData])
    }
    setIsClicked('Add Address')
  }


    const { cart } = useCart();
    const [productsInCart, setProductsInCart] = useState<cartProductsType[]>([]);
    useEffect(() => {
      const cartProducts: cartProductsType[] = [];
      cart.forEach((value, productId) => {
        const product = products.find((item) => item.id === productId);
        if (product) {
          cartProducts.push({ ...product, ...value });
        }
      });
      setProductsInCart(cartProducts);
    }, [cart]);

    const calculateTotalPrices = useCallback(() => {
        const shippingCharges = 5;
        const couponDiscount = 0;
        const totals = productsInCart.reduce(
          (totals, product) => {
            totals.totalPrice += product.price * product.count;
            totals.totalItems += product.count;
            return totals;
          },
          { totalPrice: 0, totalItems: 0 } // Initial values
        );
        const totalAmount = shippingCharges + couponDiscount + totals.totalPrice;
        return { ...totals, shippingCharges, couponDiscount, totalAmount };
      }, [productsInCart]);

    const priceSummary = calculateTotalPrices();
  return (
    <div className="flex mt-14">
        <div className="flex flex-col justify-center items-center">
            <CheckoutCart data={data} onButtonClick={handleButtonClick}/>
            <CheckoutEditAddress title={isClicked} onUpdateData={handleUpdateData} data={selectedCart}/>
        </div>
        <div className="ml-14">
           <OrderSummary priceSummary={priceSummary} />
        </div>
    </div>
  )
}

export default Checkout