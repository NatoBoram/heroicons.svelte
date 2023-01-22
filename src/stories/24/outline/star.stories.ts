import type { Meta, StoryObj } from '@storybook/svelte'
import StarSvelte from '../../../lib/24/outline/star.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: StarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<StarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Star: Story = {}
