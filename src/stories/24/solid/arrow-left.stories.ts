import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftSvelte from '../../../lib/24/solid/arrow-left.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeft: Story = {}
