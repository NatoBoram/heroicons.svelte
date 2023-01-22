import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnDownSvelte from '../../../lib/20/solid/arrow-uturn-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnDown: Story = {}
