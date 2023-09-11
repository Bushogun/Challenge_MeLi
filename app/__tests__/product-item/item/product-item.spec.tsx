import React from 'react';
import { renderWithProviders } from '@/src/utils/test-utils';
import { ProductItem } from '@/src/components/list-items/item/product-item';
import { productMock } from '@/__mocks__/product-detail.mock';

describe('ProductItem component', () => {
  it('should render correctly', () => {
    const { container } =  renderWithProviders(<ProductItem product={productMock} />);
    expect(container).toMatchSnapshot();
  });
});


