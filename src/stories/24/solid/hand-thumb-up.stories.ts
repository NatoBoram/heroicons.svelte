import type { Meta, StoryObj } from '@storybook/svelte'
import { HandThumbUp as HandThumbUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: HandThumbUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandThumbUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbUp: Story = {}
