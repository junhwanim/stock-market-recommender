import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { stockSymbols, socialMedia } from "../assets/data";
import { today, startDate } from "../utils/date";
import { SCREEN_BREAK_POINT } from "../constants/constants";

const Search = ({
  setIsRightSymbol,
  setCurrentSocialMedia,
  setCurrentStockSymbol,
  isRightSymbol,
  currentSocialMedia,
  currentStockSymbol,
  handleSubmit,
}) => {
  return (
    <SearchContainer>
      <TimeWindow>
        <span style={{ paddingRight: "15px" }}>Available date:</span>
        <StyledSpan>{startDate}</StyledSpan> ~ <StyledSpan>{today}</StyledSpan>
      </TimeWindow>
      {!isRightSymbol && (
        <AlertMessage isRightSymbol={isRightSymbol}>
          We don't accommodate {currentStockSymbol.toUpperCase()} at the moment!
          Please try others.
        </AlertMessage>
      )}
      <InputsContainer
        autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
      >
        <StockSymbolContainer>
          <label htmlFor="stockSymbol">Stock Symbol:</label>
          <StockSymbolInput
            type="text"
            name="stockSymbol"
            id="stockSymbol"
            value={currentStockSymbol}
            required
            list="stockSymbols"
            onChange={(event) => {
              setCurrentStockSymbol(event.target.value);
              setIsRightSymbol(true);
            }}
            isRightSymbol={isRightSymbol}
          />
          <datalist id="stockSymbols">
            {stockSymbols.map((symbol, index) => {
              return (
                <option key={index} value={symbol}>
                  {symbol}
                </option>
              );
            })}
          </datalist>
        </StockSymbolContainer>
        <SocialMediaContainer>
          <label htmlFor="socialMedia">Social Media:</label>
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
        <RecommendationCTA type="submit">Show Result</RecommendationCTA>
      </InputsContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 3px ${colors.primary};

  @media screen and (max-width: ${SCREEN_BREAK_POINT}) {
    flex-direction: column;
    gap: 1rem;
    width: 390px;
  }
`;

const InputsContainer = styled.form`
  align-self: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: ${SCREEN_BREAK_POINT}) {
    flex-direction: column;
    gap: 1rem;
    width: 390px;
  }
`;

const StockSymbolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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

const AlertMessage = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.redBg};
  border: 1px solid ${colors.redBorder};
  color: ${colors.red};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const TimeWindow = styled.p`
  align-self: center;
  margin-bottom: 10px;
`;

const StyledSpan = styled.span`
  color: ${colors.primary};
  font-weight: 700;
  text-emphasis: filled;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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

export default Search;
