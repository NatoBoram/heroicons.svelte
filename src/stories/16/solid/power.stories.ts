import type { Meta, StoryObj } from '@storybook/svelte'
import PowerSvelte from '../../../lib/16/solid/power.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PowerSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PowerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Power: Story = {}
