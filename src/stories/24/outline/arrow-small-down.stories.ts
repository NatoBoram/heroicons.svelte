import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallDown as ArrowSmallDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowSmallDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallDown: Story = {}
