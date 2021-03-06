import styled, { css } from 'styled-components'

import { Props } from '.'

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  /** No compress. */
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: var(--primary);

  ${({ imageUrl }) =>
    imageUrl &&
    css`
      background-image: url(${imageUrl});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `};

  position: relative;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    transition: border-radius 0.2s;

    &:hover {
      border-radius: 16px;
    }
  }

  &::before {
    width: 9px;

    position: absolute;
    left: -17px;

    background-color: var(--white);

    content: '';

    ${({ hasNotifications }) =>
      hasNotifications &&
      css`
        height: 9px;

        top: calc(50% - 4.5px);

        border-radius: 50%;

        display: inline;
      `};

    ${({ isHome }) =>
      isHome &&
      css`
        height: 30px;

        top: calc(50% - 15px);

        border-radius: 25%;

        display: inline;
      `};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${props => props.mentions && props.mentions}';
    display: ${props =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: var(--discord);
  }
`
