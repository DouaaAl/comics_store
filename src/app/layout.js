import "./globals.css";
import { CartProvider } from "../utils/cartContext";
import { ClerkProvider } from '@clerk/nextjs'



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ClerkProvider>
        <CartProvider>
          {children}
        </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
