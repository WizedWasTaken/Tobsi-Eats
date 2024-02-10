export interface OrderType {
  orderNumber: number
  date: Date
  totalAmount: number
  status: string
  items: ItemType[]
}

interface ItemType {
  name: string
  price: number
  quantity: number
}
