import type { Meta, StoryObj } from '@storybook/svelte'
import { Truck as TruckSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: TruckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TruckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Truck: Story = {}
