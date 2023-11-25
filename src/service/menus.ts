import { account, gamecoins, item, mobilebalance, topup } from "@/assets/icons";

interface MenuItem {
  name: string;
  icons: string;
}

export const menu: MenuItem[] = [
  {
    name: "Account",
    icons: account
  },
  {
    name: "Top Up",
    icons: topup
  },
  {
    name: "Games Coin",
    icons: gamecoins
  },
  {
    name: "Mobile Balance",
    icons: mobilebalance
  },
  {
    name: "Item",
    icons: item
  },
  {
    name: "Item",
    icons: item
  },
  {
    name: "Item",
    icons: item
  }
  
]