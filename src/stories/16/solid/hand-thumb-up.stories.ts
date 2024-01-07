import type { Meta, StoryObj } from '@storybook/svelte'
import HandThumbUpSvelte from '../../../lib/16/solid/hand-thumb-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HandThumbUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HandThumbUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbUp: Story = {}
