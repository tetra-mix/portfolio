import type { Meta, StoryObj } from '@storybook/react';

import { Home } from './Home';

const meta = {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;



export const story: Story = {};
