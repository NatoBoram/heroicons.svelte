import type { Meta, StoryObj } from '@storybook/svelte'
import HeartSvelte from '../../../lib/24/outline/heart.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: HeartSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HeartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Heart: Story = {}
