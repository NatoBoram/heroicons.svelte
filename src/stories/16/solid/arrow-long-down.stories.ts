import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongDownSvelte from '../../../lib/16/solid/arrow-long-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLongDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLongDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongDown: Story = {}
