import { memo } from 'react'

const ThankYou = () => {
  return (
    <>
      <div className="text-center text-4xl font-bold">
        Thank you for your order!
      </div>
      <div className="mt-2 text-center">Your order will be delivered soon.</div>
    </>
  )
}

export default memo(ThankYou)
