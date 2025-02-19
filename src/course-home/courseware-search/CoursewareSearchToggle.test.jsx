import React from 'react';
import {
  act,
  fireEvent,
  initializeMockApp,
  render,
  screen,
  waitFor,
} from '../../setupTest';
import { fetchCoursewareSearchSettings } from '../data/thunks';
import { setShowSearch } from '../data/slice';
import { CoursewareSearchToggle } from './index';

const mockDispatch = jest.fn();

jest.mock('../data/thunks');
jest.mock('../data/slice');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

function renderComponent() {
  const { container } = render(<CoursewareSearchToggle />);
  return container;
}

describe('CoursewareSearchToggle', () => {
  beforeAll(async () => {
    initializeMockApp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should not render when the waffle flag is disabled', async () => {
    fetchCoursewareSearchSettings.mockImplementation(() => Promise.resolve({ enabled: false }));

    await act(async () => renderComponent());
    await waitFor(() => {
      expect(fetchCoursewareSearchSettings).toHaveBeenCalledTimes(1);
      expect(screen.queryByTestId('courseware-search-open-button')).not.toBeInTheDocument();
    });
  });

  it('Should render when the waffle flag is enabled', async () => {
    fetchCoursewareSearchSettings.mockImplementation(() => Promise.resolve({ enabled: true }));
    await act(async () => renderComponent());

    await waitFor(() => {
      expect(fetchCoursewareSearchSettings).toHaveBeenCalledTimes(1);
      expect(screen.queryByTestId('courseware-search-open-button')).toBeInTheDocument();
    });
  });

  it('Should dispatch setShowSearch(true) when clicking the search button', async () => {
    fetchCoursewareSearchSettings.mockImplementation(() => Promise.resolve({ enabled: true }));
    await act(async () => renderComponent());
    const button = await screen.findByTestId('courseware-search-open-button');
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(setShowSearch).toHaveBeenCalledTimes(1);
    expect(setShowSearch).toHaveBeenCalledWith(true);
  });
});
