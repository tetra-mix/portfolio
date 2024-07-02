import type { Meta, StoryObj } from '@storybook/react';
import { Title, TitleProps } from './Title';

// Metaの型定義で`TitleProps`を使用
const meta: Meta<TitleProps> = {
  title: 'Example/Title',
  component: Title, // コンポーネントをMetaに登録
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// StoryObjを使用して、各ストーリーの型を明確にする
type TitleStory = StoryObj<TitleProps>;

export const Test1: TitleStory = {
  args: {
    title: 'Works',
    text: "作品一覧"
  },
};

export const Test2: TitleStory = {
  args: {
    title: 'About',
    text: "自己紹介"
  },
};