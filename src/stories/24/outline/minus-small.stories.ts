import type { Meta, StoryObj } from '@storybook/svelte'
import MinusSmallSvelte from '../../../lib/24/outline/minus-small.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: MinusSmallSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MinusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusSmall: Story = {}
