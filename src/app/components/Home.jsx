"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-5xl font-bold mt-30 text-center">
        Welcome to Roomify
      </h1>
      <p className="text-gray-700 text-center max-w-xl mb-8">
        Discover our exclusive collection of room furniture and decoration items.
        Shop the latest trends and make your space beautiful.
      </p>

      <div className="flex space-x-4">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Shop Now
        </Button>
        <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
          Learn More
        </Button>
      </div>

      <div className="mt-10 mb-10 flex flex-wrap justify-center gap-6">
        <Image
          src="https://i.ibb.co.com/5WqYjHhd/newsletter-right.jpg"
          alt="Furniture 1"
          width={250}
          height={200}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://i.ibb.co.com/VWVhGM5m/download.jpg"
          alt="Furniture 2"
          width={250}
          height={200}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg"
          alt="Furniture 3"
          width={250}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
