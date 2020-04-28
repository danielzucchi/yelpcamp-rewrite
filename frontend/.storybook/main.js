module.exports = {
  stories: [
    '../src/components/**/tests/*.stories.jsx',
    '../src/components/ui/**/tests/*.stories.jsx',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
