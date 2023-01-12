import type { Meta, StoryObj } from '@storybook/svelte'
import { Truck as TruckSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: TruckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TruckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Truck: Story = {}
