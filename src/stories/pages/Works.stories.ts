import type { Meta, StoryObj } from '@storybook/react';

import { Works } from './Works';

const meta = {
  title: 'Pages/Works',
  component: Works,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Works>;

export default meta;
type Story = StoryObj<typeof meta>;



export const story: Story = {};
