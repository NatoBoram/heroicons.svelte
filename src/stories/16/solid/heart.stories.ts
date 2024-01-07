import type { Meta, StoryObj } from '@storybook/svelte'
import HeartSvelte from '../../../lib/16/solid/heart.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HeartSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HeartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Heart: Story = {}
