"use client"

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through our categories
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/men" className="text-lg font-medium">Men</Link>
                <Link href="/women" className="text-lg font-medium">Women</Link>
                <Link href="/accessories" className="text-lg font-medium">Accessories</Link>
                <Link href="/sale" className="text-lg font-medium">Sale</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-2xl font-bold">FitGear</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/men" className="hover:text-secondary transition-colors">Men</Link>
          <Link href="/women" className="hover:text-secondary transition-colors">Women</Link>
          <Link href="/accessories" className="hover:text-secondary transition-colors">Accessories</Link>
          <Link href="/sale" className="hover:text-secondary transition-colors">Sale</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-white text-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;