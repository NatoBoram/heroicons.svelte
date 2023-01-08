import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallDown as ArrowSmallDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowSmallDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallDown: Story = {}
