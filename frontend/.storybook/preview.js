import axios from 'axios';
import '../scss/global.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const loaders = [
  async () => {
    return { storyContent: {}}
  },
];
