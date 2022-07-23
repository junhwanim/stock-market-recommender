import React from "react";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Chart from "./Chart";
import { SCREEN_BREAK_POINT } from "../constants/constants";

const Result = ({
  stockData,
  currentSocialMedia,
  recommendation,
  showRecommendation,
}) => {
  return (
    <>
      {showRecommendation && (
        <ResultContainer>
          <RecommendationOutput className={recommendation.toLowerCase()}>
            {recommendation} IT!
          </RecommendationOutput>
          <DataInfoContainer>
            <ChartContainer>
              <Chart stockData={stockData} recommendation={recommendation} />
            </ChartContainer>
            <TableContainer>
              <thead>
                <TableRow>
                  <HeaderCell>Date</HeaderCell>
                  <HeaderCell>Price (CAD)</HeaderCell>
                  <HeaderCell>{`${currentSocialMedia} Interest`}</HeaderCell>
                </TableRow>
              </thead>
              <tbody>
                {stockData?.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <DataCell>{data.date}</DataCell>
                      <DataCell>{`$ ${data.stockPrice}`}</DataCell>
                      <DataCell>{data.socialMediaCount}</DataCell>
                    </TableRow>
                  );
                })}
              </tbody>
            </TableContainer>
          </DataInfoContainer>
        </ResultContainer>
      )}
    </>
  );
};

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 0px 0px 3px ${colors.primary};
  align-self: center;
  padding: 20px;
  border-radius: 5px;
`;

const RecommendationOutput = styled.h2`
  width: 100%;
  text-align: center;
  background-color: ${colors.redBg};
  color: ${colors.red};
  border: 1px solid ${colors.redBorder};
  padding: 10px 0;
  margin-bottom: 20px;
  border-radius: 5px;

  &.buy {
    background-color: ${colors.redBg};
    color: ${colors.red};
    border: 1px solid ${colors.redBorder};
  }
  &.sell {
    background-color: ${colors.greenBg};
    color: ${colors.green};
    border: 1px solid ${colors.greenBorder};
  }
  &.hold {
    background-color: ${colors.yellowBg};
    color: ${colors.yellow};
    border: 1px solid ${colors.yellowBorder};
  }
`;

const DataInfoContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${SCREEN_BREAK_POINT}) {
    flex-direction: column;
  }
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  border-style: hidden;
  width: 360px;
  height: 360px;

  @media (max-width: ${SCREEN_BREAK_POINT}) {
    margin-top: 30px;
  }
`;

const TableRow = styled.tr`
  text-align: center;
`;

const HeaderCell = styled.th`
  border-collapse: collapse;
  padding: 10px 0;
  border: 1px groove ${colors.grey};
  background-color: ${colors.primary};
  color: ${colors.whiteSmoke};
`;

const DataCell = styled.td`
  border-collapse: collapse;
  padding: 0 5px;
  border: 1px ridge ${colors.grey};
  vertical-align: middle;
`;

const ChartContainer = styled.div`
  width: 360px;
  height: 360px;
`;

export default Result;
