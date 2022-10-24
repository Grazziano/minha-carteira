import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Lara Croft', label: 'Lara Croft' },
    { value: 'Jill Valentine', label: 'Jill Valentine' },
    { value: 'Clare Redfield', label: 'Clare Redfield' },
    { value: 'Leon S. Kennedy', label: 'Leon S. Kennedy' },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
