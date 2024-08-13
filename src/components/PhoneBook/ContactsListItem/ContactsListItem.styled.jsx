import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const ListItemWrapper = styled.li`
  position: relative;
  padding: 12px;
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.addBgColor};
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1120px) {
    max-width: 100%;
    width: 558px;
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
  margin-bottom: 17px;
`;

export const TagList = styled.ul`
  display: flex;
  margin-top: 17px;
  margin-bottom: 36px;
  gap: 8px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 431px;
    width: 100%;
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
    max-width: 100%;
    align-content: center;
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
  max-width: 431px;
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  margin-right: 15px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: ${({ theme: { colors } }) => colors.MainBlack};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.orange};
  }
`;

export const ArrowBack = styled(SVG)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  fill: currentColor;
`;

export const BackLink = ({ to, children, icon }) => {
  return (
    <StyledLink to={to}>
      <ArrowBack src={icon} />
      {children}
    </StyledLink>
  );
};
