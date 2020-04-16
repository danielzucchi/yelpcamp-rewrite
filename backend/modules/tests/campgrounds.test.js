const Campgrounds = require('../../modules/campgrounds');

jest.mock('../../modules/graphql/campground');

describe('Campground module tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('GraphQL gets called', async () => {
    const mockGetAll = jest.fn(() => Promise.resolve());

    jest.setMock('../graphql/campground', {
      getAllCampgrounds: mockGetAll,
    });

    await Campgrounds.getCampgrounds();

    expect(mockGetAll).toHaveBeenCalled();
  });
});
