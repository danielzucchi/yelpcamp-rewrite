const campgroundsModule = require('../../modules/campgrounds');
const campgroundRoutes = require('../campgroundRoutes');
const request = require('supertest');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const campgroundMocks = require('./campgroundMocks');

app.use(bodyParser.json());
app.use(campgroundRoutes);

jest.mock('../../modules/campgrounds');

describe('Campgrounds get route', () => {
  describe('Given the endpoint is called', () => {
    it('the module is called.', () => {
      campgroundsModule.getAllCampgrounds = jest.fn();

      request(app)
        .get('/campgrounds')
        .then(() => {
          expect(campgroundsModule.getAllCampgrounds).toHaveBeenCalled();
        });
    });
  });

  it('returns the right campground', () => {
    Campgrounds.getAllCampgrounds = jest.fn(() =>
      Promise.resolve(campgroundMocks.responseCampground)
    );

    return request(server)
      .get('/campgrounds')
      .then(response => {
        expect(response.body).toMatchObject({
          id: '12346',
          image:
            'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1353&q=80',
          name: 'Zion National Park',
          description:
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque rerum officia delectus molestiae nulla repellendus id quasi eaque voluptatibus esse, facere quidem asperiores quo doloremque quisquam provident enim odit.',
          deleted: false,
        });
      });
  });
});
