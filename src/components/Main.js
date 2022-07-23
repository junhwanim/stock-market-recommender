import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { stockSymbols } from "../assets/data";
import moment from "moment";
import { dateFormat, startDate } from "../utils/date";
import { DEFAULT_TIME_WINDOW } from "../constants/constants";
import Result from "./Result";
import Search from "./Search";
import { recommendationAlgorithm } from "../api/recommendationAlgo";

const Content = () => {
  const [stockData, setStockData] = useState([]);

  const [currentStockSymbol, setCurrentStockSymbol] = useState("");
  const [currentSocialMedia, setCurrentSocialMedia] = useState("");
  const [isRightSymbol, setIsRightSymbol] = useState(true);

  const [recommendation, setRecommendation] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const fetchStockData = ({
    currentStockSymbol,
    currentSocialMedia,
    startDate,
    endDate = moment().format(dateFormat),
  }) => {
    const stockArray = Array.from(Array(DEFAULT_TIME_WINDOW).keys()).map(
      (day) => ({
        stockSymbol: currentStockSymbol,
        stockPrice: Number((Math.random() * 100).toFixed(1)),
        socialMedia: currentSocialMedia,
        socialMediaCount: Math.round(Math.random() * 10000),
        date: moment(startDate).add(day, "day").format(dateFormat),
      })
    );
    return stockArray;
  };

  const handleSubmit = async (event) => {
    if (!event.target.reportValidity()) {
      setIsRightSymbol(false);
      setStockData([]);
      setShowRecommendation(false);
      return;
    }
    event.preventDefault();
    if (stockSymbols.includes(currentStockSymbol.toUpperCase())) {
      const data = await fetchStockData({
        currentStockSymbol,
        currentSocialMedia,
        startDate,
      });
      if (!data) return alert("Something went wrong, please try again!");
      setStockData(data);
      setIsRightSymbol(true);
      const currentRecommendation = recommendationAlgorithm(data);
      setRecommendation(currentRecommendation);
      setShowRecommendation(true);
    } else {
      setIsRightSymbol(false);
      setStockData([]);
      setShowRecommendation(false);
    }
  };

  return (
    <ContentContainer>
      <TitleContainer>
        <Title>Booster Your Stock Performance</Title>
        <SubTitle>with our intelligent recommender</SubTitle>
      </TitleContainer>
      <Search
        isRightSymbol={isRightSymbol}
        currentSocialMedia={currentSocialMedia}
        currentStockSymbol={currentStockSymbol}
        setIsRightSymbol={setIsRightSymbol}
        setCurrentSocialMedia={setCurrentSocialMedia}
        setCurrentStockSymbol={setCurrentStockSymbol}
        handleSubmit={handleSubmit}
      />
      <Result
        stockData={stockData}
        currentSocialMedia={currentSocialMedia}
        recommendation={recommendation}
        showRecommendation={showRecommendation}
      />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
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

export default Content;
