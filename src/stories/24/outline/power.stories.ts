import type { Meta, StoryObj } from '@storybook/svelte'
import { Power as PowerSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PowerSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PowerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Power: Story = {}
