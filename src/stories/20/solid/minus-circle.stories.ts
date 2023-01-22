import type { Meta, StoryObj } from '@storybook/svelte'
import MinusCircleSvelte from '../../../lib/20/solid/minus-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MinusCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MinusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusCircle: Story = {}
