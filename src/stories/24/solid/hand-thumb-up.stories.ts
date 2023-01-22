import type { Meta, StoryObj } from '@storybook/svelte'
import HandThumbUpSvelte from '../../../lib/24/solid/hand-thumb-up.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: HandThumbUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandThumbUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbUp: Story = {}
