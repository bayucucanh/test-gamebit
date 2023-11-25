import { account, gamecoins, item, mobilebalance, topup } from "@/assets/icons";

interface MenuItem {
  id: number
  name: string;
  icons: string;
}

export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Account",
    icons: account
  },
  {
    id: 2,
    name: "Top Up",
    icons: topup
  },
  {
    id: 3,
    name: "Games Coin",
    icons: gamecoins
  },
  {
    id: 4,
    name: "Mobile Balance",
    icons: mobilebalance
  },
  {
    id: 5,
    name: "Item",
    icons: item
  },
  {
    id: 6,
    name: "Item",
    icons: item
  },
  {
    id: 7,
    name: "Item",
    icons: item
  }
  
]