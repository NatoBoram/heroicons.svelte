import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnDown as ArrowUturnDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowUturnDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnDown: Story = {}
