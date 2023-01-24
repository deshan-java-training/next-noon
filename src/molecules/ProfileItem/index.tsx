import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
`
const ImageContainer = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  padding-left: 10px;
`
const ItemImage = styled.img`
  border-radius: 40px;
`
const NameContainer = styled.div`
  display: flex;
  flex-grow: 1;
  font-family: ${(props) => props.theme.fonts.items};
  padding-left: 8px;
  font-weight: bold;
  font-size: 13px;
  color: ${(props) => props.theme.colors.blue};
`
interface iProfileItemsProps {
  name: string
  imageURL: string
}

const ProfileItem: FC<iProfileItemsProps> = ({ name, imageURL }) => {
  return (
    <>
      <ProfileContainer>
        <ImageContainer>
          <ItemImage src={imageURL} width={35} height={35} alt='seller' />
        </ImageContainer>
        <NameContainer>{name}</NameContainer>
      </ProfileContainer>
    </>
  )
}

export default ProfileItem
