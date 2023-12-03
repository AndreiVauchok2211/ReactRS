import { render, screen } from '@testing-library/react';
import { HeadMessage } from './HeadMessage';

test('render texst', () => {
  render(<HeadMessage />);
  expect(
    screen.getByText(
      'Hi!! I am skipping the assignment React. Next.JS/SSR/SSG - as I am trying to fill the gaps in my knowledge and implement all the functionality from the previous tasks - what I was advised to do and what seems more necessary for the next and final task. You may not check my assignment. Thanks for earlier and good luck on the course!'
    )
  ).toBeInTheDocument();
});
