import type { Meta, StoryObj } from '@storybook/svelte'
import HandThumbDownSvelte from '../../../lib/24/outline/hand-thumb-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: HandThumbDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandThumbDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbDown: Story = {}
