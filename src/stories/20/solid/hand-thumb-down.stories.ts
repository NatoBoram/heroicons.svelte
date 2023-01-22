import type { Meta, StoryObj } from '@storybook/svelte'
import HandThumbDownSvelte from '../../../lib/20/solid/hand-thumb-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: HandThumbDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HandThumbDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbDown: Story = {}
