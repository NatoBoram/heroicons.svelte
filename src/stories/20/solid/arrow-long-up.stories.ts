import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLongUp as ArrowLongUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowLongUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLongUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongUp: Story = {}
