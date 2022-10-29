import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  Container,
  Legend,
  LegendContainer,
  SideLeft,
  SideRight,
} from './styles';

const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#f7931b">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#e44c4e">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#f7931b">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#e44c4e">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#f7931b">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#e44c4e">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#f7931b">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#e44c4e">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#f7931b">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#e44c4e">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>

    <SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey="percent">
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
  </Container>
);

export default PieChart;
