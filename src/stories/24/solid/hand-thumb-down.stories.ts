import type { Meta, StoryObj } from '@storybook/svelte'
import HandThumbDownSvelte from '../../../lib/24/solid/hand-thumb-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: HandThumbDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandThumbDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbDown: Story = {}
