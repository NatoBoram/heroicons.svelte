import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongDownSvelte from '../../../lib/24/solid/arrow-long-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLongDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongDown: Story = {}
