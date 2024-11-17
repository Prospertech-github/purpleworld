import React from 'react'
import { ProductsProvider } from '../contexts/ProductsProvider'
import { Outlet } from 'react-router-dom'
import SearchModal from './SearchModal'

export default function ProductsLayout() {
  return (
    // Making use of the ProductsProvider from the ProductsProvider.jsx component
    <ProductsProvider>
        <Outlet />
        <SearchModal />
    </ProductsProvider>
  )
}
