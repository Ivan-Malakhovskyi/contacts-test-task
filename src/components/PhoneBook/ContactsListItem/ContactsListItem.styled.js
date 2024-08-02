import styled from "styled-components";
import SVG from "react-inlinesvg";

export const ListItemWrapper = styled.li`
  position: relative;
  padding: 12px;
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.addBgColor};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const UserAvatar = styled.img`
  margin: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 9px;
  right: 12px;
`;

export const IconClose = styled(SVG)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;

  @media screen and (min-width: 768px) {
    min-width: 558px;
  }
`;

export const ContactCredentials = styled.span`
  color: ${({ theme: { colors } }) => colors.MainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ContactCredentialsSeparator = styled.span`
  color: ${({ theme: { colors } }) => colors.MainBlack};
  margin-right: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Topic = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const TagList = styled.ul`
  display: flex;
  margin-top: 17px;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TagListItem = styled.li`
  display: flex;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.accentBgColor};
`;

export const TagListItemName = styled.span`
  color: ${({ theme: { colors } }) => colors.MainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const ContactDetailsStyled = styled.div`
  padding-top: 32px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
  /* max-width: 431px; */
  /* max-height: 341px; */
`;

export const AvatarWrapper = styled.div`
  margin-right: 15px;
`;
