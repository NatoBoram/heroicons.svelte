import type { Meta, StoryObj } from '@storybook/svelte'
import StarSvelte from '../../../lib/16/solid/star.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: StarSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<StarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Star: Story = {}
