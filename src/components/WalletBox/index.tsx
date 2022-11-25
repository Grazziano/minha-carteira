import React, { useMemo } from 'react';
import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import { Container } from './styles';
import CountUp from 'react-countup';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerlabel: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerlabel,
  icon,
  color,
}) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$</strong>{' '}
        <CountUp
          end={amount}
          // prefix={'R$ '}
          separator="."
          decimal=","
          decimals={2}
          // preserveValue={true}
        />
      </h1>
      <small>{footerlabel}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
};

export default WalletBox;
