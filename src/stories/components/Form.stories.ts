import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

const meta = {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;



export const story: Story = {};
