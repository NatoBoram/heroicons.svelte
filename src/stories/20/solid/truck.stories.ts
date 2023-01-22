import type { Meta, StoryObj } from '@storybook/svelte'
import TruckSvelte from '../../../lib/20/solid/truck.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: TruckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TruckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Truck: Story = {}
