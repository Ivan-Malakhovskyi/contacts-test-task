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
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ContactCredentialsSeparator = styled.span`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  margin-right: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const TagList = styled.ul`
  display: flex;
  margin-top: 17px;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TagListItem = styled.li`
  display: flex;
  width: 30px;
  height: 20px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.accentBgColor};
`;

export const TagListItemName = styled.span`
  color: ${({ theme: { colors } }) => colors.MainBlack};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
`;
