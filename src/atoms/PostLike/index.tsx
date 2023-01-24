import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { MdFavorite } from 'react-icons/md'

const LikesContainer = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
`
const LikeText = styled.div`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.item};
  font-weight: bold;
  font-size: 13px;
  padding-left: 5px;
`
const PostLike: FC<{ likes: number }> = ({ likes }) => {
  const theme: any = useTheme()

  return (
    <LikesContainer>
      <MdFavorite size={18} fill={theme.colors.blue} type={'icon'} />
      <LikeText>{`${likes} likes`}</LikeText>
    </LikesContainer>
  )
}

export default PostLike
