import type { Meta, StoryObj } from '@storybook/react';

import { Contact } from './Contact';

const meta = {
  title: 'Pages/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;



export const story: Story = {};
