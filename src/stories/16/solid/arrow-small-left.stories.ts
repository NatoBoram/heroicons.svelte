import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallLeftSvelte from '../../../lib/16/solid/arrow-small-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowSmallLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowSmallLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallLeft: Story = {}
