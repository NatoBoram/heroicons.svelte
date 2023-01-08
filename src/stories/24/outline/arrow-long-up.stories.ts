import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLongUp as ArrowLongUpSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowLongUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongUp: Story = {}
