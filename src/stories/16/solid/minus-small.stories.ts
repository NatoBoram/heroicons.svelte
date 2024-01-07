import type { Meta, StoryObj } from '@storybook/svelte'
import MinusSmallSvelte from '../../../lib/16/solid/minus-small.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MinusSmallSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MinusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusSmall: Story = {}
