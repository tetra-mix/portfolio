import type { Meta, StoryObj } from '@storybook/react';
import { Work, WorkProps } from './Work';

// Metaの型定義で`WorkProps`を使用
const meta: Meta<WorkProps> = {
  title: 'Example/Work',
  component: Work, // コンポーネントをMetaに登録
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// StoryObjを使用して、各ストーリーの型を明確にする
type WorkStory = StoryObj<WorkProps>;

export const Test1: WorkStory = {
  args: {
    image: {
      url: 'https://via.placeholder.com/300',
    },
    subtitle: 'subtitle',
    title: 'Test 1',
    body: 'This is the first test body.',
    link: {
      Youtube: 'https://www.youtube.com/',
    }
  },
};

export const Test2: WorkStory = {
  args: {
    image: {
      url: 'https://via.placeholder.com/300',
    },
    subtitle: 'subtitle',
    title: 'Test 2',
    body: 'This is the first test body.',
    link: {
      Youtube: 'https://www.youtube.com/',
    }
  },
};