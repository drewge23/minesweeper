import { render, screen } from '@testing-library/react';
import Board from "./components/Board";
import {Provider} from "react-redux";
import store from "./slices/store";

test('renders learn react link', () => {
  render(<Provider store={store}>
    <Board size={10} />
  </Provider>);
  const buttonElement = screen.getByText(/start/i);
  expect(buttonElement).toBeInTheDocument();
});
