import type { Meta, StoryObj } from '@storybook/svelte'
import PlusSmallSvelte from '../../../lib/24/outline/plus-small.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PlusSmallSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusSmall: Story = {}
