import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnDownSvelte from '../../../lib/16/solid/arrow-uturn-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUturnDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUturnDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnDown: Story = {}
