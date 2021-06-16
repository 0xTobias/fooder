import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RestaurantsList from './RestaurantsList';

describe('<RestaurantsList />', () => {
  test('it should mount', () => {
    render(<RestaurantsList />);
    
    const restaurantsList = screen.getByTestId('RestaurantsList');

    expect(restaurantsList).toBeInTheDocument();
  });
});