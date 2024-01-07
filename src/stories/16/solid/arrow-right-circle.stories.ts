import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightCircleSvelte from '../../../lib/16/solid/arrow-right-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowRightCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowRightCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightCircle: Story = {}
