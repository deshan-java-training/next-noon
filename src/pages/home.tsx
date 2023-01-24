import { FavoriteContext } from '@/context/Context'
import ProductCard from '@/src/organisms/ProductCard'
import MainLayout from '@/src/templates/MainLayout'
import { media } from '@/styles/ThemeConfig'
import { BASE_SERVICE_URL } from '@/utils/constants/AppConfig'
import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  ${media.desktop} {
    margin: 3rem auto;
    grid-template-columns: repeat(3, 1fr);
    margin: 3rem 1rem;
  }
  grid-gap: 2rem;
`

export interface ProductDetailType {
  comments: string
  description: string
  favorite_id: number
  is_favorite: 1 | 0
  like_count: number
  name: string
  price: number
  product_id: number
  product_img_url: string
  seller_name: string
  seller_profile_pic_url: string
  tags: string
}

interface iProductProps {
  products: Array<ProductDetailType>
}

const Home: FC<iProductProps> = ({ products }) => {
  const { isFavorite, setIsFavorite } = useContext(FavoriteContext)

  const items = isFavorite
    ? products.filter((e: ProductDetailType) => e.is_favorite === 1)
    : products

  return (
    <MainLayout>
      <CardContainer>
        {items.map((e: ProductDetailType) => {
          return <ProductCard key={e.product_id} data={e} />
        })}
      </CardContainer>
    </MainLayout>
  )
}
export default Home

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_SERVICE_URL}/products`)
  const data: Array<ProductDetailType> = await res.json()

  return {
    props: {
      products: data
    }
  }
}
