import type { Meta, StoryObj } from '@storybook/svelte'
import TruckSvelte from '../../../lib/16/solid/truck.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TruckSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TruckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Truck: Story = {}
