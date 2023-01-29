import { useAppState } from '@/reducer/AppState'
import { ShoppingCartActions } from '@/reducer/ShoppingCartReducer'
import { memo } from 'react'
import { FaImage } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const ShoppingCart = () => {
  const [state, dispatch] = useAppState()
  return (
    <ul className="w-full list-inside list-none space-y-4">
      {state.shoppingCart.map((burger, index) => (
        <li key={index}>
          <div className="grid grid-cols-3 items-center gap-x-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-gray-300 p-1">
              <FaImage size={40} />
            </div>
            <div className="flex flex-col">
              <div>{burger.name}</div>
              <div>
                {burger.price.toFixed(2)} - ({burger.size})
              </div>
            </div>
            <button className="btn-outline btn btn-square btn-sm">
              <MdClose
                onClick={() =>
                  dispatch({
                    type: ShoppingCartActions.REMOVE_BURGER,
                    payload: index,
                  })
                }
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default memo(ShoppingCart)
