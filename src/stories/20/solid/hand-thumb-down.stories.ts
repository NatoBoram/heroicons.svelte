import type { Meta, StoryObj } from '@storybook/svelte'
import { HandThumbDown as HandThumbDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: HandThumbDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HandThumbDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbDown: Story = {}
