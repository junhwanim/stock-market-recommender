import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { stockSymbols } from "../assets/data";
import { socialMedia } from "../assets/data";
import moment from "moment";

const Content = () => {
  const defaultTimeWindow = 10;
  const dateFormat = "YYYY-MM-DD";
  const startDate = moment()
    .subtract(defaultTimeWindow, "days")
    .format(dateFormat);
  const today = moment().format(dateFormat);

  const [stockData, setStockData] = useState([]);
  const [currentStockSymbol, setCurrentStockSymbol] = useState("");
  const [currentSocialMedia, setCurrentSocialMedia] = useState("");
  const [isRightSymbol, setIsRightSymbol] = useState(true);

  const fetchStockData = ({
    currentStockSymbol,
    currentSocialMedia,
    startDate,
    endDate = moment().format(dateFormat),
  }) => {
    const array = Array.from(Array(defaultTimeWindow).keys()).map((day) => ({
      stockSymbol: currentStockSymbol,
      stockPrice: (Math.random() * 100).toFixed(1),
      socialMedia: currentSocialMedia,
      socialMediaCount: Math.round(Math.random() * 10000),
      date: moment(startDate).add(day, "day").format(dateFormat),
    }));
    return array;
  };

  const handleSubmit = async (event) => {
    if (!event.target.reportValidity()) {
      setIsRightSymbol(false);
      setStockData([]);
      return;
    }
    event.preventDefault();
    if (stockSymbols.includes(currentStockSymbol.toUpperCase())) {
      const data = await fetchStockData({
        currentStockSymbol,
        currentSocialMedia,
        startDate,
      });
      setStockData(data);
      setIsRightSymbol(true);
    } else {
      setIsRightSymbol(false);
      setStockData([]);
    }
  };

  return (
    <ContentContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Booster Your Stock Performance</Title>
          <SubTitle>with our intelligent recommender</SubTitle>
        </TitleContainer>
        <InputsContainer onSubmit={(event) => handleSubmit(event)}>
          <StockSymbolContainer>
            <Label htmlFor="stockSymbol">Stock Symbol:</Label>
            <StockSymbolInput
              type="text"
              name="stockSymbol"
              id="stockSymbol"
              value={currentStockSymbol}
              required
              onChange={(event) => {
                setCurrentStockSymbol(event.target.value);
                setIsRightSymbol(true);
              }}
              isRightSymbol={isRightSymbol}
            />
          </StockSymbolContainer>
          <WrongSymbol isRightSymbol={isRightSymbol}>
            We don't accommodate {currentStockSymbol.toUpperCase()} at the
            moment! Please try others.
          </WrongSymbol>
          <SocialMediaContainer>
            <Label htmlFor="socialMedia">Social Media:</Label>
            <SocialMediaSelector
              name="socialMedia"
              id="socialMedia"
              defaultValue={currentSocialMedia}
              placeholder={"socialMedia"}
              required
              onChange={(event) => setCurrentSocialMedia(event.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {socialMedia.map((platform, index) => {
                return (
                  <option key={index} value={platform}>
                    {platform}
                  </option>
                );
              })}
            </SocialMediaSelector>
          </SocialMediaContainer>
          <TimeWindow>
            <span style={{ paddingRight: "15px" }}>Available data:</span>
            <StyledSpan>{startDate}</StyledSpan> ~{" "}
            <StyledSpan>{today}</StyledSpan>
          </TimeWindow>
          <RecommendationCTA type="submit">Show Result</RecommendationCTA>
        </InputsContainer>
      </TopContainer>
      <DataContainer>
        <TableContainer>
          <TableHead>
            <TableRow>
              <HeaderCell>Date</HeaderCell>
              <HeaderCell>Stock Price</HeaderCell>
              <HeaderCell>{`${currentSocialMedia} Media Count`}</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockData?.map((data) => {
              return (
                <TableRow>
                  <DataCell>{data.date}</DataCell>
                  <DataCell>{`CAD ${data.stockPrice}`}</DataCell>
                  <DataCell>{data.socialMediaCount}</DataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </DataContainer>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${colors.primary};
  padding-bottom: 5px;
`;

const SubTitle = styled.h3`
  color: ${colors.primary};
`;

const InputsContainer = styled.form`
  width: 430px;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  border: 1px solid ${colors.primary};
  border-top: none;
  padding: 20px;
  position: relative;

  ::after,
  ::before {
    content: "";
    background-color: ${colors.whiteSmoke};
    display: block;
    height: 20px;
    position: absolute;
    width: 20px;
  }

  ::after {
    bottom: -1px;
    right: -1px;
  }

  ::before {
    bottom: -1px;
    left: -1px;
  }
`;

const StockSymbolContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 15px 8px 15px;
`;

const Label = styled.label`
  padding-right: 15px;
`;

const StockSymbolInput = styled.input`
  height: 20px;
  border: ${({ isRightSymbol }) =>
    isRightSymbol ? `2px solid ${colors.grey}` : "2px solid red"};
  border-radius: 5px;

  :focus,
  :hover {
    border: 2px solid ${colors.primary};
    outline: none;
  }
`;

const WrongSymbol = styled.p`
  visibility: ${({ isRightSymbol }) => (isRightSymbol ? "hidden" : "visible")};
  align-self: center;
  color: red;
  font-size: 14px;
`;

const TimeWindow = styled.p`
  padding: 15px;
  align-self: center;
`;

const StyledSpan = styled.span`
  color: ${colors.primary};
  font-weight: 700;
  text-emphasis: filled;
`;

const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 15px 15px 15px;
`;

const SocialMediaSelector = styled.select`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 26px;
  width: 147px;
  border: 2px solid ${colors.grey};
  border-radius: 5px;

  :focus,
  :hover {
    border: 2px solid ${colors.primary};
    outline: none;
  }
`;

const RecommendationCTA = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  align-self: center;
  height: 50px;
  margin: 15px;
  padding: 10px;
  border: 2px solid ${colors.primary};
  font-size: 1em;
  background-color: ${colors.whiteSmoke};
  color: ${colors.primary};
  border-radius: 5px;

  :hover {
    background-color: ${colors.primary};
    cursor: pointer;
    color: ${colors.whiteSmoke};
  }

  :active {
    transform: scale(0.9);
  }
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  border-style: hidden;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr``;

const HeaderCell = styled.th`
  border-collapse: collapse;
  padding: 8px;
  border: 1px groove ${colors.grey};
  background-color: ${colors.powderBlue};
`;

const TableBody = styled.tbody``;

const DataCell = styled.td`
  border-collapse: collapse;
  text-align: center;
  padding: 5px 8px 5px 8px;
  border: 1px ridge ${colors.grey};
`;

export default Content;
