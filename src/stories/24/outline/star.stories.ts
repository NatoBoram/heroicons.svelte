import type { Meta, StoryObj } from '@storybook/svelte'
import { Star as StarSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: StarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<StarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Star: Story = {}
