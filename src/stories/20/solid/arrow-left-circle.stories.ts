import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftCircleSvelte from '../../../lib/20/solid/arrow-left-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLeftCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLeftCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftCircle: Story = {}
