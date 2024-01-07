import type { Meta, StoryObj } from '@storybook/svelte'
import HandThumbDownSvelte from '../../../lib/16/solid/hand-thumb-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HandThumbDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HandThumbDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbDown: Story = {}
