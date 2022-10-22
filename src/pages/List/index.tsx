import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

const List: React.FC = () => {
  const options = [
    { value: 'Lara Croft', label: 'Lara Croft' },
    { value: 'Jill Valentine', label: 'Jill Valentine' },
    { value: 'Clare Redfield', label: 'Clare Redfield' },
    { value: 'Leon S. Kennedy', label: 'Leon S. Kennedy' },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
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
