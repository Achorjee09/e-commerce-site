"use client";

import { Search, ShoppingCart, BadgePercent, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useCart } from "@/app/components/CartContext";

export default function Header({ setActiveSection, searchTerm, setSearchTerm }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // ✅ calculate cart count and grand total
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setActiveSection("shop"); // redirect to shop section on search
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar Section */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white">
        {/* Top Promo Bar */}
        <div className="bg-gray-100 text-gray-800 text-sm py-2 text-center flex items-center justify-center gap-2">
          <BadgePercent className="w-4 h-4 text-black-500" />
          <span>
            30% off storewide - Limited Time!{" "}
            <button
              onClick={() => setActiveSection("shop")}
              className="font-semibold underline hover:text-blue-600"
            >
              Shop Now →
            </button>
          </span>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          {/* Left: Logo */}
          <button
            onClick={() => setActiveSection("home")}
            className="text-2xl font-bold text-slate-800 hover:text-slate-600"
          >
            Roomify.
          </button>

          {/* Middle: Menu (Desktop) */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <button onClick={() => setActiveSection("home")} className="hover:text-blue-600">
              Home
            </button>
            <button onClick={() => setActiveSection("shop")} className="hover:text-blue-600">
              Shop
            </button>
            <button onClick={() => setActiveSection("product")} className="hover:text-blue-600">
              Product
            </button>
            <button onClick={() => setActiveSection("contact")} className="hover:text-blue-600">
              Contact Us
            </button>
          </nav>

          {/* Right: Search + Cart + Mobile Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Search */}
            <div className="relative hidden sm:block">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`border rounded-md px-2 py-1 w-48 transition-all ${
                    showSearch ? "opacity-100 visible w-32" : "opacity-0 invisible w-0"
                  }sm:w-48`}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowSearch(!showSearch)}
                  className="absolute top-0 right-0 z-10"
                >
                  <Search className="w-5 h-5 text-gray-500" />
                </Button>
              </form>
            </div>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            </Button>

            {/* Mobile Hamburger */}
            <button className="md:hidden p-2" onClick={toggleSidebar}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-gray-700 text-2xl font-bold">
              ×
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
            <button
              onClick={() => {
                setActiveSection("home");
                toggleSidebar();
              }}
              className="hover:text-blue-600 text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveSection("shop");
                toggleSidebar();
              }}
              className="hover:text-blue-600 text-left"
            >
              Shop
            </button>
            <button
              onClick={() => {
                setActiveSection("product");
                toggleSidebar();
              }}
              className="hover:text-blue-600 text-left"
            >
              Product
            </button>
            <button
              onClick={() => {
                setActiveSection("contact");
                toggleSidebar();
              }}
              className="hover:text-blue-600 text-left"
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Overlay when sidebar open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </header>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
          </DialogHeader>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-3">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>
                      {item.name} (x{item.quantity}) - ${item.price} each ={" "}
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </span>
                    <div className="space-x-2">
                      <Button
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white"
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white"
                      >
                        -
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right font-bold">
                Grand Total: ${grandTotal}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
