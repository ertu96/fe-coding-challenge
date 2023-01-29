import { burgers } from '@/data/burgers'
import { memo } from 'react'
import BurgerListItem from './BurgerListItem'

const BurgerList = () => {
  return (
    <ul className="w-full list-inside list-none space-y-4">
      {burgers.map((burger) => (
        <BurgerListItem key={burger.id} burger={burger} />
      ))}
    </ul>
  )
}

export default memo(BurgerList)
