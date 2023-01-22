import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownSvelte from '../../../lib/20/solid/arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {}
