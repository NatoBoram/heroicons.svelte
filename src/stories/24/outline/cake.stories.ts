import type { Meta, StoryObj } from '@storybook/svelte'
import CakeSvelte from '../../../lib/24/outline/cake.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CakeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CakeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cake: Story = {}
