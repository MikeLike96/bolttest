import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Hero Image: Fitness models in athletic wear"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Elevate Your Fitness Journey</h1>
            <p className="text-xl mb-8">Premium athletic wear for peak performance</p>
            <Button asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Placeholder for featured products */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image: Featured Item {item}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Featured Product {item}</h3>
                <p className="text-gray-600 mb-4">$XX.XX</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Men', 'Women', 'Accessories', 'Sale'].map((category) => (
            <Link href={`/${category.toLowerCase()}`} key={category} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={`https://source.unsplash.com/random/400x300?${category.toLowerCase()},fitness`}
                alt={`Category Image: ${category}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;