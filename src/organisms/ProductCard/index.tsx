import PostLike from '@/src/atoms/PostLike'
import ImageProductInfo from '@/src/molecules/ImageProductInfo'
import PostDescription from '@/src/molecules/PostDescription'
import ProfileItem from '@/src/molecules/ProfileItem'
import { ProductDetailType } from '@/src/pages/home'
import React, { FC } from 'react'
import styled from 'styled-components'

const CardItem = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`
const ImageSection = styled.div`
  height: 225px;
  background-color: grey;
  position: relative;
`
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
const CardContent = styled.div`
  padding: 5px 10px;
`
interface iProductDetail {
  key: number
  data: ProductDetailType
}

const ProductCard: FC<iProductDetail> = ({ data }) => {
  return (
    <CardItem>
      <ProfileItem
        imageURL={data.seller_profile_pic_url}
        name={data.seller_name}
      />
      <ImageSection>
        <ItemImage src={data.product_img_url} alt={data.name} />

        <ImageProductInfo
          isFavorite={data.is_favorite}
          name={data.name}
          price={data.price}
          id={data.product_id}
        />
      </ImageSection>
      <CardContent>
        <PostLike likes={data.like_count} />
        <PostDescription
          description={data.description}
          commentsNo={data.comments}
          hashTags={data.tags}
        />
      </CardContent>
    </CardItem>
  )
}

export default ProductCard
