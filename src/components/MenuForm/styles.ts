import { FaDropbox } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;
    font-weight: 600;

    > span {
      color: var(--quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    background: none;
    border: none;
    outline: none;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--blue);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    background-color: var(--tertiary);
    border: 1px solid var(--border);
    padding: 13px 18px;
    font-size: 14px;
    margin-top: 18px;
    border-radius: 2px;
  }

  > button {
    margin-top: 18px;
    padding: 13px 18px;
    font-size: 16px;
    background-color: var(--blue);
    color: var(--tertiary);
    border: none;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 4px;
  }
`;