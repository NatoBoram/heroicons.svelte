import type { Meta, StoryObj } from '@storybook/svelte'
import { Heart as HeartSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: HeartSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HeartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Heart: Story = {}
