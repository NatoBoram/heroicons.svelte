import type { Meta, StoryObj } from '@storybook/svelte'
import { HandThumbDown as HandThumbDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: HandThumbDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandThumbDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbDown: Story = {}
