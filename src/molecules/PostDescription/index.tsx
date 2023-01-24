import React, { FC } from 'react'
import styled from 'styled-components'

const DesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemDesc = styled.div`
  font-family: ${(props) => props.theme.fonts.items};
  color: #858585;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const HashDesc = styled.div`
  font-family: ${(props) => props.theme.fonts.items};
  color: ${(props) => props.theme.colors.blue};
  font-size: 13px;
`
const CommentsSection = styled.div`
  font-family: ${(props) => props.theme.fonts.items};
  color: #b5b5b5;
  font-size: 13px;
  margin-top: 8px;
`
interface iDescriptionProps {
  description: string
  commentsNo: string
  hashTags: string
}

const PostDescription: FC<iDescriptionProps> = ({
  description,
  commentsNo,
  hashTags
}) => {
  return (
    <DesContainer>
      <ItemDesc>{description}</ItemDesc>
      <HashDesc>{hashTags}</HashDesc>
      <CommentsSection>{`View ${commentsNo} comments`}</CommentsSection>
    </DesContainer>
  )
}
export default PostDescription
