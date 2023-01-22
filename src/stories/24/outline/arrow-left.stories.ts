import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftSvelte from '../../../lib/24/outline/arrow-left.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeft: Story = {}
