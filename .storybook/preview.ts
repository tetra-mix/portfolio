import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
/*
const witchUIProvider = (Story, context) => {
  return (
    <UIProvider>
      <Story {...context} />
    </UIProvider>
  );
};
export default decorators = []
*/

export default preview;
