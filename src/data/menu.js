import KeyIcon from '../assets/icons/key-square.svg?react'
import CubeIcon from '../assets/icons/3d-square.svg?react'
import MessageIcon from '../assets/icons/message-question.svg?react'
import DiscountIcon from '../assets/icons/discount-shape.svg?react'
import UserIcon from '../assets/icons/user-square.svg?react'
import WalletIcon from '../assets/icons/wallet-money.svg?react'

export const menu = [
  {id: 1, to: '/', className: 'icon-stroke', icon: KeyIcon, title: 'Dashboard'},
  {id: 2, to: 'product', className: 'icon-fill', icon: CubeIcon, title: 'Product'},
  {id: 3, to: 'customers', className: 'icon-stroke', icon: UserIcon, title: 'Customers'},
  {id: 4, to: 'income', className: 'icon-stroke', icon: WalletIcon, title: 'Income'},
  {id: 5, to: 'promote', className: 'icon-fill', icon: DiscountIcon, title: 'Promote'},
  {id: 6, to: 'help', className: 'icon-fill', icon: MessageIcon, title: 'Help'}
]
