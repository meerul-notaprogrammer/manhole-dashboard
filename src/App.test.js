import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders dashboard and checking heatmap', async () => {
  render(<App />);
  const dashboardTitle = screen.getByText(/H01 Manhole Sensor Dashboard/i);
  expect(dashboardTitle).toBeInTheDocument();

  // Switch to "Events" tab
  const eventsTab = screen.getByText(/Events/i, { selector: 'button' });
  fireEvent.click(eventsTab);

  const heatmapTitle = screen.getByText(/Activity Heatmap/i);
  expect(heatmapTitle).toBeInTheDocument();

  // Find all heatmap squares.
  const squares = document.querySelectorAll('div[title*="events"]');

  // Verify that we now render all 60 squares.
  expect(squares.length).toBe(60);

  // Verify that the last square corresponds to the end of the range.
  // 15:48 + 59 minutes = 16:47.
  const lastSquare = squares[squares.length - 1];
  expect(lastSquare.title).toContain('16:47');

  // Verify that we are NOT missing the later events anymore.
  // We know there are events at 16:42.
  const square1642 = Array.from(squares).find(s => s.title.includes('16:42'));
  expect(square1642).toBeDefined();
  // And it should have events (intensity > 0)
  // Based on the data: { time: '16:42:25', ... }, { time: '16:42:41', ... } -> 2 events
  expect(square1642.title).toContain('2 events');
});
