import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongUpSvelte from '../../../lib/20/solid/arrow-long-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLongUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLongUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongUp: Story = {}
