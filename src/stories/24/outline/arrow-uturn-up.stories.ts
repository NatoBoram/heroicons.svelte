import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnUpSvelte from '../../../lib/24/outline/arrow-uturn-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUturnUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnUp: Story = {}
