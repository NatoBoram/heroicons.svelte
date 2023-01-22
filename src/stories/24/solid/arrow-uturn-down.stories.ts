import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnDownSvelte from '../../../lib/24/solid/arrow-uturn-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUturnDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnDown: Story = {}
