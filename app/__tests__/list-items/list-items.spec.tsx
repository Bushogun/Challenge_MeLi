// import React from 'react';
// import { renderWithProviders } from '@/src/utils/test-utils';
// import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
// import { ListItems } from '@/src/components/list-items/list-product-items';
// import configureStore from 'redux-mock-store';

// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// describe('ListItems component', () => {
//   const mockStore = configureStore([]);
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       product: {
//         itemsPerPage: 10,
//         products: [
//           // Define aquí los productos de prueba según tu estructura
//         ],
//       },
//     });
//   });

//   it('should render correctly', () => {
//     useSelector.mockReturnValue({
//       product: {
//         itemsPerPage: 10,
//         products: [
//           // Define aquí los productos de prueba según tu estructura
//         ],
//       },
//     });

//     const { container } = renderWithProviders(<ListItems />, store);
//     expect(container).toMatchSnapshot();
//   });

//   // Agrega más pruebas según tus necesidades
// });
