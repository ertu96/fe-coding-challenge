import { coupons } from '@/data/coupons'
import { memo } from 'react'

const AvailableCoupons = () => {
  return (
    <div className="mb-5 flex justify-around">
      <div className="text-xl font-bold">Available coupons:</div>
      <ul className="list-inside list-disc">
        {coupons.map((coupon) => (
          <li key={coupon}>{coupon}</li>
        ))}
      </ul>
    </div>
  )
}

export default memo(AvailableCoupons)
