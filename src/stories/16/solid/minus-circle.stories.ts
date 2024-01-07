import type { Meta, StoryObj } from '@storybook/svelte'
import MinusCircleSvelte from '../../../lib/16/solid/minus-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MinusCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MinusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusCircle: Story = {}
