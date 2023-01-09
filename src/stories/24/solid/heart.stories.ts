import type { Meta, StoryObj } from '@storybook/svelte'
import { Heart as HeartSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: HeartSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HeartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Heart: Story = {}