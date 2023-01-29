import AvailableCoupons from '@/components/AvailableCoupons'
import BurgerList from '@/components/burger-list/BurgerList'
import Checkout from '@/components/Checkout'
import ContentCard from '@/components/content-card/ContentCard'
import ContentCardHeader from '@/components/content-card/ContentCardHeader'
import ShoppingCart from '@/components/shopping-cart/ShoppingCart'
import { memo } from 'react'

const Home = () => {
  return (
    <div>
      <AvailableCoupons />
      <div className="mb-6 grid h-full grid-cols-1 md:grid-cols-2  md:gap-2">
        <ContentCard>
          <ContentCardHeader label="Order" />
          <BurgerList />
        </ContentCard>
        <ContentCard>
          <ContentCardHeader label="Summary" />
          <ShoppingCart />
        </ContentCard>
      </div>
      <Checkout />
    </div>
  )
}

export default memo(Home)
