import { multipliers } from '@/data/multipliers'
import { Burger } from '@/interfaces/Burger'
import { useAppState } from '@/reducer/AppState'
import { ShoppingCartActions } from '@/reducer/ShoppingCartReducer'
import { memo, useRef, useState } from 'react'
import { FaImage, FaPlus } from 'react-icons/fa'

type BurgerListItemProps = {
  burger: Burger
}

const BurgerListItem = ({ burger }: BurgerListItemProps) => {
  const [, dispatch] = useAppState()
  const [selectedPrice, setSelectedPrice] = useState<number>(0)
  const [selectedSize, setSelectedSize] = useState<string>('')

  const closeButtonRef = useRef<HTMLLabelElement>(null)

  const addToShoppingCart = (burger: Burger) => {
    dispatch({
      type: ShoppingCartActions.ADD_BURGER,
      payload: { ...burger, price: selectedPrice, size: selectedSize },
    })
    closeButtonRef.current?.click()
  }

  return (
    <li key={burger.id}>
      <div className="grid grid-cols-3 items-center gap-x-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-gray-300 p-1">
          <FaImage size={40} />
        </div>
        <div className="flex flex-col">
          <div>{burger.name}</div>
          <div>{burger.price.toFixed(2)}</div>
        </div>
        <label
          htmlFor={`burger-${burger.id}`}
          className="btn-outline btn btn-square btn-sm"
        >
          <FaPlus />
        </label>
      </div>

      <input
        type="checkbox"
        id={`burger-${burger.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">
            {burger.name} - {burger.price.toFixed(2)}
          </h3>
          <p className="py-4">Select your size:</p>
          <ul>
            <li></li>
          </ul>
          <div className="flex justify-center">
            <div className="btn-group">
              {multipliers.map((multiplier) => (
                <input
                  type="radio"
                  key={multiplier.name}
                  name="options"
                  data-title={`${multiplier.name} - ${(
                    multiplier.factor * burger.price
                  ).toFixed(2)}`}
                  className="btn"
                  onChange={() => {
                    setSelectedPrice(multiplier.factor * burger.price)
                    setSelectedSize(multiplier.name)
                  }}
                />
              ))}
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor={`burger-${burger.id}`}
              className="btn"
              ref={closeButtonRef}
            >
              Close
            </label>
            <label onClick={() => addToShoppingCart(burger)} className="btn">
              Add Item
            </label>
          </div>
        </div>
      </div>
    </li>
  )
}

export default memo(BurgerListItem)
