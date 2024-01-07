import type { Meta, StoryObj } from '@storybook/svelte'
import PlusSmallSvelte from '../../../lib/16/solid/plus-small.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PlusSmallSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PlusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusSmall: Story = {}
