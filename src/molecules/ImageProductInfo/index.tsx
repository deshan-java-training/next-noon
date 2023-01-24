import React, { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { HiOutlineHeart } from 'react-icons/hi'
import { Axios } from 'axios'
import { BASE_SERVICE_URL } from '@/utils/constants/AppConfig'

interface iImageProductProps {
  name: string
  price: number
  isFavorite: 1 | 0
  id: number
}

const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 2px;
  align-items: center;
`
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 10px;
  line-height: 20px;
  font-size: 1rem;
`
const FavoritesContainer = styled.div`
  display: flex;
  justify-items: center;
  padding-right: 12px;
`
const NameItem = styled.div`
  font-family: ${(props) => props.theme.fonts.items};
  color: white;
`
const PriceItem = styled.div`
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.items};
  color: white;
`

const ImageProductInfo: FC<iImageProductProps> = ({
  name,
  price,
  isFavorite,
  id
}) => {
  const theme: any = useTheme()

  const handleFavoriteClick = async (id: number, favorite: boolean) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    }
    try {
      const favoriteReq: any = await fetch(
        `${BASE_SERVICE_URL}/products/${id}?is_favorite=${favorite ? 0 : 1}`,
        requestOptions
      )
      if (favoriteReq) {
        setFavorite(favoriteReq.is_favorite === 0 ? false : true)
      }
    } catch (e) {
      console.log('e', e)
    }
  }
  const [favorite, setFavorite] = useState(isFavorite === 0 ? false : true)

  return (
    <InfoContainer>
      <DescContainer>
        <NameItem>{name}</NameItem>
        <PriceItem>{`AED ${price}`}</PriceItem>
      </DescContainer>
      <FavoritesContainer>
        <HiOutlineHeart
          onClick={() => handleFavoriteClick(id, favorite)}
          size={25}
          color={'white'}
          fill={favorite ? '#3b3938' : 'transparent'}
        />
      </FavoritesContainer>
    </InfoContainer>
  )
}

export default ImageProductInfo
