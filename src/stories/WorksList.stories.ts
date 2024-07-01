import type { Meta, StoryObj } from '@storybook/react';

import { WorksList } from './WorksList';

const meta = {
  title: 'Pages/WorksList',
  component: WorksList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WorksList>;

export default meta;
type Story = StoryObj<typeof meta>;



export const story: Story = {};
