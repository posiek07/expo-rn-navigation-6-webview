import React from 'react'
import styled from 'styled-components'

const StyledCardImage = styled.Image`
  width: 100%;
  height: 30%;
`;

const Logo = ({logo}) => {
    return (
        <StyledCardImage source={{uri: logo}} />
    )
}

export default Logo

