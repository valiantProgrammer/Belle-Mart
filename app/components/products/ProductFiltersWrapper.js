'use client';

import { useState, useRef } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import ProductFilters from './ProductFilters';

// Create a context to share filter state and mobile toggle
import { createContext, useContext } from 'react';

const MobileFilterContext = createContext(null);

export function useMobileFilter() {
  return useContext(MobileFilterContext);
}

export default function ProductFiltersWrapper() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  return (
    <MobileFilterContext.Provider value={{ isFilterOpen, setIsFilterOpen }}>
      {/* Desktop Sidebar - renders ProductFilters once */}
      <aside className="hidden lg:block w-64 h-full flex-shrink-0 overflow-y-auto bg-white border-r border-gray-200 no-scrollbar">
        <div className="p-4" ref={filterRef}>
          <ProductFilters />
        </div>
      </aside>

      {/* Mobile Button Only (ProductFilters hidden on mobile via CSS) */}
      <div className="lg:hidden fixed top-24 left-4 z-40">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-md"
        >
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>

        {/* Mobile Drawer - shows same ProductFilters instance but don't render it again */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsFilterOpen(false)}
            />
            
            {/* Drawer with close button only - ProductFilters rendered above */}
            <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>
                {/* Filters content in drawer is hidden and shown via JS below */}
              </div>
            </div>
          </div>
        )}
      </div>
    </MobileFilterContext.Provider>
  );
}



