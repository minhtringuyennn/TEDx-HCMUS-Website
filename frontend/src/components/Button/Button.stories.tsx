import * as React from 'react';
import type {
  StoryObj,
  Meta,
  ReactRenderer,
  Args,
  ArgTypes,
} from '@storybook/react';
import Button from 'components/Button';
import { useArgs } from '@storybook/client-api';

const Render = (args: Args) => {
  const [{ count = 0, disabled, children }, updateArgs] = useArgs();

  React.useEffect(() => {
    if (disabled) updateArgs({ children: "I'm on a break" });
    else updateArgs({ children: 'Clicked {{count}} times' });
  }, [disabled, updateArgs]);

  return (
    <Button {...args} onClick={() => updateArgs({ count: count + 1 })}>
      {children?.toString().replace('{{count}}', count)}
    </Button>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  render: Render,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { disabled: false },
  argTypes: {
    count: {
      defaultValue: 1,
      type: 'number',
      description: 'This is a storybook only argument for demonstration',
    },
    children: { type: 'string', defaultValue: 'Clicked {{count}} times' },
  } as ArgTypes,
};
