export interface CountryData {
  name: string;
  income: number;
  lifeExpectancy: number;
  population: number;
  color: string;
}

export const MOCK_DATA: CountryData[] = [
  {
    name: 'United States',
    income: 65000,
    lifeExpectancy: 78.9,
    population: 331900000,
    color: '#FF6B6B'
  },
  {
    name: 'Germany',
    income: 53000,
    lifeExpectancy: 81.3,
    population: 83200000,
    color: '#4ECDC4'
  },
  {
    name: 'Japan',
    income: 42000,
    lifeExpectancy: 84.6,
    population: 125800000,
    color: '#45B7D1'
  },
  {
    name: 'Brazil',
    income: 15000,
    lifeExpectancy: 75.9,
    population: 215300000,
    color: '#96CEB4'
  },
  {
    name: 'India',
    income: 7000,
    lifeExpectancy: 69.7,
    population: 1380000000,
    color: '#FFEAA7'
  },
  {
    name: 'Nigeria',
    income: 5500,
    lifeExpectancy: 54.3,
    population: 218500000,
    color: '#DDA0DD'
  },
  {
    name: 'China',
    income: 18000,
    lifeExpectancy: 77.4,
    population: 1439000000,
    color: '#FFB347'
  }
];