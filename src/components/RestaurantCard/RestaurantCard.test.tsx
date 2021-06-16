import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RestaurantCard from './RestaurantCard';

describe('<RestaurantCard />', () => {
  test('it should mount', () => {
    render(<RestaurantCard />);
    
    const restaurantCard = screen.getByTestId('RestaurantCard');

    expect(restaurantCard).toBeInTheDocument();
  });
});