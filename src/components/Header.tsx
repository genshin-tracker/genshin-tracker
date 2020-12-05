import hr from 'assets/hr.png';
import liyue from 'assets/liyue.jpg';
import mondstadt from 'assets/mondstadt.jpg';
import React, { useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const images = [liyue, mondstadt];
const HeaderBackground = styled.header<{ backgroundImage: string }>`
  background: center no-repeat url(${({ backgroundImage }) => backgroundImage});
  background-size: 100% auto;
  position: relative;
  margin-top: 4px;
  height: 10vw;
  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;
const HeaderText = styled.h3`
  position: relative;
  font-size: 5vw;
  font-weight: 400;
  text-align: center;
  width: fit-content;
  margin: auto;
  margin-top: 2.5vw;
  height: 5vw;
  z-index: 3;
  &:before,
  :after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    content: '';
    position: absolute;
    top: 50%;
    width: 385px;
    height: 14px;
    background: url(${hr}) no-repeat right center/cover;
  }
  &:before {
    left: 0;
    transform: translate(calc(-100% - 32px), -50%);
  }
  &:after {
    right: 0;
    transform: translate(calc(100% + 32px), -50%) rotateY(180deg);
  }
`;
interface TitleInterface {
  title: string;
  img: string;
}
export default function Header() {
  const { pathname } = useLocation();
  const titles = useRef<TitleInterface[]>([]);
  const { title, img } = useMemo(() => {
    const str =
      pathname
        .replace(/^\//, '')
        .replace(/-/g, ' ')
        .replace(/\//g, ' - ')
        .replace(/(?:^| )([a-z])/g, (str) => str.toUpperCase()) || 'Home';
    const exists = titles.current.find(({ title: t }) => t === str);
    if (exists) return exists;
    const next = {
      title: str,
      img:
        images[
          images.indexOf(titles.current[titles.current.length - 1]?.img) + 1
        ],
    };
    titles.current.push(next);
    return next;
  }, [pathname]);
  return (
    <HeaderBackground backgroundImage={img}>
      <HeaderText>{title}</HeaderText>
    </HeaderBackground>
  );
}
