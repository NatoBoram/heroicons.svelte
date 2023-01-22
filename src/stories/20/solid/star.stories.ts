import type { Meta, StoryObj } from '@storybook/svelte'
import StarSvelte from '../../../lib/20/solid/star.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: StarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<StarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Star: Story = {}
