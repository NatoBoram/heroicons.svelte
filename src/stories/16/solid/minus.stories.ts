import type { Meta, StoryObj } from '@storybook/svelte'
import MinusSvelte from '../../../lib/16/solid/minus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MinusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Minus: Story = {}
