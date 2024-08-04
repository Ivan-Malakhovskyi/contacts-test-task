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

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 558px;
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

  /* @media screen and (min-width: 1128px) {
    max-width: 558px;
  } */
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
  margin-bottom: 36px;
  gap: 8px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 426px;
  }
`;

export const Tag = styled.span`
  color: ${({ theme: { colors } }) => colors.MainBlack};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
`;

export const TagListItem = styled.li`
  display: flex;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.accentBgColor};

  @media screen and (max-width: 767px) {
    width: 54px;
    justify-content: center;
    align-items: center;
  }
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
  margin-bottom: 26px;
`;

export const ContactDetailsContainer = styled.div`
  display: table;
  margin: 0 auto;
  width: 431px;
  max-width: 100%;
`;

export const AvatarWrapper = styled.div`
  margin-right: 15px;
`;
