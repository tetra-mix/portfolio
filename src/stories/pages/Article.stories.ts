import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

const meta = {
  title: 'Pages/Article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;



export const story: Story = {};
