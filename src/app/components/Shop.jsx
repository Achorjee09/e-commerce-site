"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, ChevronDown, Star, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/app/components/CartContext";


const categories = ["All Rooms","Living Room","Bedroom","Kitchen","Bathroom","Dining","Outdoor","Office","Kids Room"];
const categoryProducts = {
  "Living Room": [
    { name: "Modern Sofa", price: 320, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Classic Armchair", price: 150, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Glass Coffee Table", price: 180, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Luxury Recliner", price: 400, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Wooden TV Stand", price: 120, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bookshelf Unit", price: 250, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Stylish Lamp", price: 90, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Rug Carpet", price: 200, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Wall Art Frame", price: 75, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Curtain Set", price: 60, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Coffee Side Table", price: 110, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Cushion Set", price: 55, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Bedroom": [
    { name: "Wooden Bed", price: 350, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Nightstand", price: 90, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Wardrobe Closet", price: 280, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Dressing Table", price: 150, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Mattress Comfort", price: 220, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bedside Lamp", price: 60, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Wall Mirror", price: 80, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Pillow Set", price: 40, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bed Sheet", price: 55, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Drawer Cabinet", price: 130, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Decor Plant", price: 45, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Table Clock", price: 35, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Kitchen": [
    { name: "Non-Stick Frying Pan", price: 70, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Electric Kettle", price: 60, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Blender Machine", price: 120, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Microwave Oven", price: 220, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Cutting Board", price: 25, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Knife Set", price: 80, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Rice Cooker", price: 95, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Dish Rack", price: 45, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Pressure Cooker", price: 110, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Toaster", price: 55, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Glass Set", price: 30, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Storage Jars", price: 40, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Bathroom": [
    { name: "Luxury Towel Set", price: 80, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Shower Curtain", price: 45, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Toothbrush Holder", price: 25, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bath Mat", price: 35, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bathroom Mirror", price: 95, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Soap Dispenser", price: 20, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Laundry Basket", price: 55, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Shower Head", price: 75, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Storage Shelf", price: 90, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Hand Dryer", price: 120, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Toilet Brush", price: 15, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Air Freshener", price: 18, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Dining": [
    { name: "Dining Table Set", price: 500, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Ceramic Dinnerware", price: 150, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Cutlery Set", price: 100, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Wine Glasses", price: 90, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Table Cloth", price: 40, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Serving Tray", price: 50, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Salt & Pepper Shaker", price: 20, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Water Jug", price: 30, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Fruit Bowl", price: 60, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Napkin Set", price: 25, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Serving Spoon Set", price: 45, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Chair Cushion", price: 35, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Outdoor": [
    { name: "Garden Chair", price: 120, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "BBQ Grill", price: 300, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Patio Umbrella", price: 200, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Swing Chair", price: 350, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Outdoor Table", price: 250, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Camping Tent", price: 180, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Hammock", price: 90, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Portable Cooler", price: 75, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Fire Pit", price: 270, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Lantern Light", price: 40, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Garden Tools Set", price: 65, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Picnic Basket", price: 55, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Office": [
    { name: "Office Chair", price: 250, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Laptop Stand", price: 80, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Desk Lamp", price: 60, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Office Desk", price: 400, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bookshelf", price: 150, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Pen Holder", price: 25, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Whiteboard", price: 100, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Filing Cabinet", price: 180, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Table Clock", price: 45, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Printer", price: 220, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Desk Organizer", price: 50, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Mouse Pad", price: 15, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],

  "Kids Room": [
    { name: "Toy Storage Box", price: 70, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bunk Bed", price: 450, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Study Table", price: 180, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Kids Chair", price: 40, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Bookshelf Small", price: 90, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Doll House", price: 120, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Soft Toys", price: 35, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Drawing Board", price: 55, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Table Lamp", price: 30, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Kids Rug", price: 65, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Toy Train Set", price: 85, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
    { name: "Study Chair", price: 50, image: "https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg" },
  ],
}; 
const products = Object.keys(categoryProducts).flatMap((cat) =>
  categoryProducts[cat].map((p, i) => ({ id: `${cat}-${i}`, ...p, category: cat }))
);
const priceRanges = [
  { label: "All Price", min: 0, max: 9999 },
  { label: "$0.00 - 99.99", min: 0, max: 99.99 },
  { label: "$100.00 - 199.99", min: 100, max: 199.99 },
  { label: "$200.00 - 299.99", min: 200, max: 299.99 },
  { label: "$300.00 - 399.99", min: 300, max: 399.99 },
  { label: "$400.00+", min: 400, max: 9999 },
];

export default function Shop({ searchTerm }) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Rooms");
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [visibleCount, setVisibleCount] = useState(9);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = products
    .filter(
      (p) =>
        (selectedCategory === "All Rooms" || p.category === selectedCategory) &&
        p.price >= selectedPrice.min &&
        p.price <= selectedPrice.max &&
        (searchTerm === "" ||
          p.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="min-h-screen bg-gray-50 mt-27">
      {/* Banner */}
      <div className="relative w-[96%] mx-auto h-64 sm:h-72 md:h-80 lg:h-96">
        <Image
          src="https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg"
          alt="Shop Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Shop Page</h1>
          <p className="mt-2 text-sm sm:text-lg md:text-xl">
            Let's design the place you always imagined.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 p-4 md:p-6">
      
        <div className="col-span-12 md:col-span-3 space-y-6 order-2 md:order-1">
          
          <div className="flex items-center gap-2 font-bold text-lg">
            <Filter className="w-5 h-5" /> Filter
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">CATEGORIES</h3>
            <ScrollArea className="h-32 pr-2">
              <div className="space-y-1">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setVisibleCount(9); }}
                    className={`cursor-pointer p-1 rounded ${
                      selectedCategory === cat
                        ? "font-bold text-black bg-gray-200"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-semibold mb-2">PRICE</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.label} className="flex items-center justify-between">
                  <Label htmlFor={range.label} className="text-sm cursor-pointer select-none">
                    {range.label}
                  </Label>
                  <Checkbox
                    id={range.label}
                    checked={selectedPrice.label === range.label}
                    onCheckedChange={() => setSelectedPrice(range)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-span-12 md:col-span-9 order-1 md:order-2">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h2 className="text-xl font-bold">{selectedCategory}</h2>
            <div className="flex gap-2 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    Sort by <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOrder("desc")}>
                    Price: High to Low
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <div key={product.id}>
                  <Card className="relative group overflow-hidden border shadow-sm rounded-md rounded-none">
                    <div className="w-full h-64 sm:h-72 md:h-80">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      <span className="rounded bg-white text-black text-xs font-bold px-2 py-1">NEW</span>
                      <span className="rounded bg-green-500 text-white text-xs font-bold px-2 py-1">-50%</span>
                    </div>

                    <div
                      className="absolute top-2 right-2 cursor-pointer opacity-0 group-hover:opacity-100 transition"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </div>

                    {/* Add to Cart */}
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition">
                      <Button
                        onClick={() => addToCart(product)}
                        className="w-full bg-black text-white hover:bg-gray-800"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card>

                  <div className="mt-2 text-left">
                    <div className="flex text-black mb-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-4">No matching products found</p>
          )}

          {/* Show More */}
          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="bg-gray-800 text-white hover:bg-black"
              >
                Show More
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
