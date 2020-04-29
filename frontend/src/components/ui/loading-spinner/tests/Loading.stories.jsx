import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../Loading';

const stories = storiesOf('UI|Loading Spinner');

stories.add('Simple', () => <Loading />);
