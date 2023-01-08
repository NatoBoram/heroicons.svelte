import type { Meta, StoryObj } from '@storybook/svelte'
import { Power as PowerSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PowerSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PowerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Power: Story = {}
