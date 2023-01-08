import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownLeft as ArrowDownLeftSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowDownLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownLeft: Story = {}
