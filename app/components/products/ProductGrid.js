// components/products/ProductGrid.js
"use client";

import { useState, useEffect, Suspense, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { productsApi } from "../../lib/api";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../ui/LoadingSpinner";

function ProductGridContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  // Memoize the string representation of search params to get stable reference
  const searchParamsString = useMemo(() => {
    return searchParams.toString();
  }, [searchParams]);

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams(searchParamsString);
      const products = await productsApi.getProducts(params);
      setProducts(products);
    } finally {
      setLoading(false);
    }
  }, [searchParamsString]);

  // Only fetch when searchParamsString actually changes (not just reference change)
  useEffect(() => {
    fetchProducts();
  }, [searchParamsString, fetchProducts]);

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    // The flex container remains the same
    <div className="flex flex-wrap m-2">
      {products.map((product) => (
        // The first class `w-full` makes the card take the full width on mobile.
        // Other classes like `sm:w-1/2` handle larger screens.
        <div 
          key={product._id} 
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 group min-w-[180px] lg:min-w-[220px] max-w-sm"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <Suspense fallback={
      <div className="py-20 flex justify-center">
        <LoadingSpinner size="large" />
      </div>
    }>
      <ProductGridContent />
    </Suspense>
  );
}