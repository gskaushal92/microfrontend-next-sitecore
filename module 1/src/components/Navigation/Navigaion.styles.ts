import styled from 'styled-components';
// import Link from 'next/link';

export const Navul = styled.ul`
  display: flex;
  list-style-type: none;
  position: relative;
  gap: 1rem;

  li {
    position: relative;
    &:hover {
      ul {
        display: block;
        position: absolute;
        background-color: #fff;
        padding: 0 2rem 1rem 0.7rem;
        min-width: 220px;
        max-width: 283px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        li {
          position: relative;
          padding: 0.5em 0.5em 0;
        }
      }
    }
  }
`;

export const NavSubul = styled.ul`
  list-style-type: none;
  display: none;
  position: static;
`;

// export
