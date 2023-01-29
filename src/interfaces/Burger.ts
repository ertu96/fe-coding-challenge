export interface Burger {
  id: number
  name: string
  price: number
  amount?: number
  size?: 'small' | 'medium' | 'large'
}
