"use client"

import useCommonState from "@/app/src/hooks/useCommonState";
import { useRouter } from "next/navigation";

export default function ProccedCheckout({ items, carts }) {
  const {  setCheckout } = useCommonState();
  const router = useRouter()
  return (
    <button className="btn w-full !py-2" onClick={() => {
      
      setCheckout(carts)
      router.push("/checkout")
    }}>
      Proceed To Checkout ({items})
    </button>
  );
}
