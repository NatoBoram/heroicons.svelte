import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowRightCircle as ArrowRightCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowRightCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowRightCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightCircle: Story = {}
