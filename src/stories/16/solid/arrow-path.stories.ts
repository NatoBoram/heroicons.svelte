import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowPathSvelte from '../../../lib/16/solid/arrow-path.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowPathSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowPathSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPath: Story = {}
