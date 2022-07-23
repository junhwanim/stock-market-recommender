import { recommendationAlgorithm } from "./recommendationAlgo";
import { BUY, SELL, HOLD } from "../constants/constants";

const mockData = [
  {
    date: "2022-07-15",
    socialMedia: "Instagram",
    socialMediaCount: 4261,
    stockPrice: 34.7,
    stockSymbol: "AAPL",
  },
  {
    date: "2022-07-16",
    socialMedia: "Instagram",
    socialMediaCount: 4161,
    stockPrice: 35.8,
    stockSymbol: "AAPL",
  },
  {
    date: "2022-07-18",
    socialMedia: "Instagram",
    socialMediaCount: 5161,
    stockPrice: 30.8,
    stockSymbol: "AAPL",
  },
];

const mockData2 = [
  {
    date: "2022-07-15",
    socialMedia: "Instagram",
    socialMediaCount: 4265,
    stockPrice: 24.7,
    stockSymbol: "AAPL",
  },
  {
    date: "2022-07-16",
    socialMedia: "Instagram",
    socialMediaCount: 4164,
    stockPrice: 15.8,
    stockSymbol: "AAPL",
  },
  {
    date: "2022-07-18",
    socialMedia: "Instagram",
    socialMediaCount: 5165,
    stockPrice: 40.8,
    stockSymbol: "AAPL",
  },
];

const mockData3 = [
  {
    date: "2022-07-15",
    socialMedia: "Instagram",
    socialMediaCount: 6261,
    stockPrice: 44.7,
    stockSymbol: "AAPL",
  },
  {
    date: "2022-07-16",
    socialMedia: "Instagram",
    socialMediaCount: 6161,
    stockPrice: 45.8,
    stockSymbol: "AAPL",
  },
  {
    date: "2022-07-18",
    socialMedia: "Instagram",
    socialMediaCount: 4161,
    stockPrice: 30.8,
    stockSymbol: "AAPL",
  },
];

describe("algorithm should suggest the correct recommendation", () => {
  it("should recommend to hold", () => {
    expect(recommendationAlgorithm(mockData)).toBe(HOLD);
  });

  it("should recommend to buy", () => {
    expect(recommendationAlgorithm(mockData2)).toBe(BUY);
  });

  it("should recommend to sell", () => {
    expect(recommendationAlgorithm(mockData3)).toBe(SELL);
  });

  it("should return an empty string", () => {
    expect(recommendationAlgorithm([])).toBe("");
  });
});
