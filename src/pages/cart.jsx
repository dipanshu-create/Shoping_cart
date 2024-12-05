import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(state);
  return (
    <div>
      {cart && cart.length ? (
        <>
        <div className="min-h-[80vh] gird md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map(cartItem=><CartTile carItem={cartItem}/>)}
          </div>
        </div>
        <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
          <h1>Your Cart Summery</h1>
        </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center"></div>
      )}
      <h1 className="text-gray-800 font-bold text-xl mb-2">
        Your cart is empty
      </h1>
      <Link to="/">
        <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
          SHOP NOW
        </button>
      </Link>
    </div>
  );
}
