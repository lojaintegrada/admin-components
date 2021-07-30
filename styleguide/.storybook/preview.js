import '../src/tailwind.css'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  // actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
  layout: 'centered',
  options: {
    storySort: {
      method: '',
      order: ['Introduction', 'Components'],
    },
  },
};
