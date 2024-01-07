import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongUpSvelte from '../../../lib/16/solid/arrow-long-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLongUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLongUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongUp: Story = {}
