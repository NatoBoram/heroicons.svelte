import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLeftCircle as ArrowLeftCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLeftCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftCircle: Story = {}
