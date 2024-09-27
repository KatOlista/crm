import KeyIcon from '../assets/icons/key-square.svg?react'
import CubeIcon from '../assets/icons/3d-square.svg?react'
import MessageIcon from '../assets/icons/message-question.svg?react'
import DiscountIcon from '../assets/icons/discount-shape.svg?react'
import UserIcon from '../assets/icons/user-square.svg?react'
import WalletIcon from '../assets/icons/wallet-money.svg?react'

export const menu = [
  {
    id: 1,
    to: 'dashboard',
    icon: KeyIcon,
    title: 'Dashboard'
  },
  {
    id: 2,
    to: 'product',
    icon: CubeIcon,
    title: 'Product'
  },
  {
    id: 3,
    to: 'customers',
    icon: UserIcon,
    title: 'Customers'
  },
  {
    id: 4,
    to: 'income',
    icon: WalletIcon,
    title: 'Income'
  },
  {
    id: 5,
    to: 'promote',
    icon: DiscountIcon,
    title: 'Promote'
  },
  {
    id: 6,
    to: 'help',
    icon: MessageIcon,
    title: 'Help'
  }
]
