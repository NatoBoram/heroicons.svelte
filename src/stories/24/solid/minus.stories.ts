import type { Meta, StoryObj } from '@storybook/svelte'
import MinusSvelte from '../../../lib/24/solid/minus.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: MinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Minus: Story = {}
