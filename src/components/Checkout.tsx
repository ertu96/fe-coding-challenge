import { coupons } from '@/data/coupons'
import { useAppState } from '@/reducer/AppState'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'

const Checkout = () => {
  const [state] = useAppState()
  const [usedCoupons, setUsedCoupons] = useState<string[]>([])
  const [couponInput, setCouponInput] = useState<string>('')
  const [discount, setDiscount] = useState<number>(0)

  const totalPrice = state.shoppingCart
    .map((burger) => burger.price)
    .reduce((a, b) => a + b, 0)

  const validateCoupon = () => {
    if (
      couponInput === 'HAMBURGER' &&
      state.shoppingCart.filter((burger) => burger.id === 1).length < 2
    ) {
      alert('You need at least two hamburgers to use this coupon')
      return
    }
    if (
      couponInput === 'CHEESEBURGER' &&
      state.shoppingCart.filter((burger) => burger.id === 2).length < 2
    ) {
      alert('You need at least two cheeseburgers to use this coupon')
      return
    }
    if (usedCoupons.includes(couponInput)) {
      alert('Coupon already used')
      return
    }
    if (!coupons.includes(couponInput)) {
      alert('Invalid coupon')
      return
    }
    setUsedCoupons([...usedCoupons, couponInput])
  }

  const useCoupon = (coupon: string) => {
    if (coupon === 'HAMBURGER')
      return state.shoppingCart
        .filter((burger) => burger.id === 1)[0]
        .price.toFixed(2)
    else if (coupon === 'CHEESEBURGER')
      return state.shoppingCart
        .filter((burger) => burger.id === 2)[0]
        .price.toFixed(2)
    else if (coupon === 'FINSTREET20') return (totalPrice * 0.2).toFixed(2)
  }

  useEffect(() => {
    if (
      usedCoupons.includes('HAMBURGER') &&
      state.shoppingCart.filter((burger) => burger.id === 1).length < 2
    )
      setUsedCoupons(usedCoupons.filter((coupon) => coupon !== 'HAMBURGER'))
    if (
      usedCoupons.includes('CHEESEBURGER') &&
      state.shoppingCart.filter((burger) => burger.id === 1).length < 2
    )
      setUsedCoupons(usedCoupons.filter((coupon) => coupon !== 'CHEESEBURGER'))
  }, [state.shoppingCart])

  useEffect(() => {
    if (usedCoupons.includes('FINSTREET20')) setDiscount(totalPrice * 0.2)
    if (usedCoupons.includes('HAMBURGER'))
      setDiscount(
        (prev) =>
          prev + state.shoppingCart.filter((burger) => burger.id === 1)[0].price
      )
    if (usedCoupons.includes('CHEESEBURGER'))
      setDiscount(
        (prev) =>
          prev + state.shoppingCart.filter((burger) => burger.id === 2)[0].price
      )
  }, [state.shoppingCart, usedCoupons])

  return (
    <>
      <div className="mb-2 text-center font-bold">
        TOTAL: {totalPrice.toFixed(2)}
      </div>
      <div className="flex justify-center">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Use Coupon"
              className="input-bordered input"
              onChange={(e) => setCouponInput(e.target.value)}
            />
            <button className="btn btn-square" onClick={validateCoupon}>
              Use
            </button>
          </div>
        </div>
      </div>
      <div className=" my-6 flex justify-center gap-2">
        {usedCoupons.length > 0 && (
          <>
            Using following coupons:
            <ul>
              {usedCoupons.map((coupon) => (
                <li key={coupon}>
                  <span>{coupon}</span> <span>(-{useCoupon(coupon)})</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className=" flex items-center justify-center gap-6">
        <div className="font-bold">
          TOTAL AFTER DISCOUNT:{' '}
          {(
            Number(totalPrice.toFixed(2)) - Number(discount.toFixed(2))
          ).toFixed(2)}
        </div>
        <Link href="/thank-you" className="btn">
          Checkout
        </Link>
      </div>
    </>
  )
}

export default memo(Checkout)
