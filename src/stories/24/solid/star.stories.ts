import type { Meta, StoryObj } from '@storybook/svelte'
import StarSvelte from '../../../lib/24/solid/star.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: StarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<StarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Star: Story = {}
