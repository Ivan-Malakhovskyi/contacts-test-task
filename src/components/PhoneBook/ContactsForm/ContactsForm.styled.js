import styled from "styled-components";

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
`;

export const FormSection = styled.section`
  padding-top: 22px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`;

export const Input = styled.input`
  padding: 14px 12px;
  border: 1px solid ${({ theme: { colors } }) => colors.MainColorInput};
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.MainBackgroundColor};

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.MainColorInput};
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.MainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 10px 89px;
  margin-top: 20px;
  border: 1px solid ${({ theme: { colors } }) => colors.MainColorInput};
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.MainBackgroundColor};
`;

export const ErrorMsg = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  color: #dc2626;
`;
