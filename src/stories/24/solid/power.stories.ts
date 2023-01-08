import type { Meta, StoryObj } from '@storybook/svelte'
import { Power as PowerSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: PowerSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PowerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Power: Story = {}
