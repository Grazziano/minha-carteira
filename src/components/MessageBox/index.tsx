import React from 'react';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import { Container } from './styles';

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <Container>
      <header>
        <h1>
          {title} <img src={happyImg} alt={title} />
        </h1>
        <p>{description}</p>
      </header>

      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};

export default MessageBox;
