import type { Meta, StoryObj } from '@storybook/svelte'
import { MinusCircle as MinusCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: MinusCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MinusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusCircle: Story = {}
