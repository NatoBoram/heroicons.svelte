import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftSvelte from '../../../lib/16/solid/arrow-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeft: Story = {}
