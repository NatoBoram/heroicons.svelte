import type { Meta, StoryObj } from '@storybook/svelte'
import TruckSvelte from '../../../lib/24/outline/truck.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: TruckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TruckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Truck: Story = {}
