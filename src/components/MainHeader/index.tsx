import React, { useMemo, useState } from 'react';
import { useTheme } from '../../hooks/theme';
import dark from '../../styles/themes/dark';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';
import { Container, Profile, UserName, Welcome } from './styles';

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    // console.log(indice);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Grazziano Fagundes</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
