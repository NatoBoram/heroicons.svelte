import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnDown as ArrowUturnDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowUturnDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnDown: Story = {}
