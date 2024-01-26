import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputStyled = styled.input`
    width: 100%;
    padding: 8px 10px;
    background-color: transparent;
    color: white;
    border: ${({ iserror }) => (iserror ? 'var(--red) ' : '1px solid var(--white);')};
    @media (max-width: 768px) {
        width: 70%;
    }
`

export const ErrorMessageForm = styled.p`
    margin: 0;
    margin-top: 5px;
    color: var(--red);
    font-size: 14px;
`