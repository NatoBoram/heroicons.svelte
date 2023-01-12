import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnDown as ArrowUturnDownSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnDown: Story = {}
