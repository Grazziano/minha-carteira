import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';
import listOfMonths from '../../utils/months';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  // const years = [
  //   { value: 2020, label: 2020 },
  //   { value: 2021, label: 2021 },
  //   { value: 2022, label: 2022 },
  //   { value: 2023, label: 2023 },
  //   { value: 2024, label: 2024 },
  //   { value: 2025, label: 2025 },
  //   { value: 2026, label: 2026 },
  //   { value: 2027, label: 2027 },
  //   { value: 2028, label: 2028 },
  //   { value: 2029, label: 2029 },
  //   { value: 2030, label: 2030 },
  // ];

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error('invalid month value. Is accept 0 - 24.');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error('invalid year value. Is accept integer numbers.');
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="saldo"
          amount={150}
          footerlabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4e41f0"
        />
        <WalletBox
          title="entradas"
          amount={5000.0}
          footerlabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931b"
        />
        <WalletBox
          title="saídas"
          amount={4850.0}
          footerlabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />

        <MessageBox
          title="Muito Bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo."
          icon={happyImg}
        />
        
        <MessageBox
          title="Muito Bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo."
          icon={sadImg}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
