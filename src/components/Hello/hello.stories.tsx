import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs, text } from '@storybook/addon-knobs';
import Hello from '.';

export default {
  title: 'Hello',
  component: Hello,
  decorators: [withKnobs],
} as Meta;

export const Basic: Story = () => (
  <Hello title={text('Title', 'React Avançado')} />
);
