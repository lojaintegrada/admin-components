import '../src/tailwind.scss'

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  layout: 'centered',
  darkMode: {
    current: 'light',
    darkClass: 'dark',
    classTarget: 'html',
    stylePreview: true,
  },
  options: {
    storySort: {
      method: '',
      order: ['Introduction', 'Components', 'Default'],
    },
  },
};
