import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
  ];

  const years = [
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 },
    { value: 2026, label: 2026 },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>

        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
