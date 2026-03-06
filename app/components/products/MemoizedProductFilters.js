'use client';

import { memo, Suspense } from 'react';
import ProductFilters from './ProductFilters';
import LoadingSpinner from '../ui/LoadingSpinner';

// Wrap ProductFilters in memo to prevent unnecessary re-renders from parent
const MemoizedProductFilters = memo(() => (
  <Suspense fallback={<LoadingSpinner size="small" />}>
    <ProductFilters />
  </Suspense>
));

MemoizedProductFilters.displayName = 'MemoizedProductFilters';

export default MemoizedProductFilters;
