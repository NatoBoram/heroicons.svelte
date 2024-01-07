import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallUpSvelte from '../../../lib/16/solid/arrow-small-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowSmallUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowSmallUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallUp: Story = {}
