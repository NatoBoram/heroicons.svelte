import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongDownSvelte from '../../../lib/20/solid/arrow-long-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLongDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLongDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongDown: Story = {}
