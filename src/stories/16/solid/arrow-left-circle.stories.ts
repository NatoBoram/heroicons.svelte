import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftCircleSvelte from '../../../lib/16/solid/arrow-left-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLeftCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLeftCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftCircle: Story = {}
