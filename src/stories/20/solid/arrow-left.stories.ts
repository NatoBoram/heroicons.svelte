import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftSvelte from '../../../lib/20/solid/arrow-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeft: Story = {}
