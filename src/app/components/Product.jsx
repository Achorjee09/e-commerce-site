"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Product() {
  return (
    <section className="min-h-screen mt-10 px-4 sm:px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-center bg-white gap-8 md:gap-12">
      
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://i.ibb.co.com/5WqYjHhd/newsletter-right.jpg"
          alt="Premium Sofa"
          width={400}
          height={300}
          className="shadow-lg object-cover w-full h-auto max-w-md"
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>

     
      <div className="w-full md:w-1/2 max-w-md flex flex-col items-start text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Premium Sofa Set</h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          Experience comfort and luxury with our premium sofa set. Perfect for your living room.
        </p>
        <p className="text-xl sm:text-2xl font-semibold mb-4">$499</p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto px-6 py-3">
          Add to Cart
        </Button>
      </div>
    </section>
  );
}
