import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightCircleSvelte from '../../../lib/24/solid/arrow-right-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowRightCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowRightCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightCircle: Story = {}
