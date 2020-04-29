import React from 'react';
import { storiesOf } from '@storybook/react';
import CampgroundTile from '../CampgroundTile';
import campgroundMock from './Campground.mock';

const stories = storiesOf('Components|Camground Tile');

stories.add('Simple', () => <CampgroundTile campground={campgroundMock} />);
