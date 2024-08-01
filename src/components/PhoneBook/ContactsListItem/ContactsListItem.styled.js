import styled from "styled-components";
import SVG from 'react-inlinesvg'


export const ListItemWrapper = styled.div`
position: relative;
padding: 12px;
border-radius: 4px;
background: ${({theme: {colors}}) => colors.addBgColor};
`


export const UserAvatar = styled(SVG)`
width: ${({width}) => width};
height: ${({height}) => height};
`

export const ButtonClose = styled.button`
position: absolute;
top: 9px;
right: 12px;
`

export const IconClose = styled(SVG)`
width: ${({width}) => width};
height: ${({ height }) => height};

`

export const ContactInfoWrapper = styled.div`
display: flex;
width: 100%;
gap: 14px;

@media screen and (min-width:768px) {
    min-width: 558px;
}
`

export const ContactCredentials = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 24px;
`