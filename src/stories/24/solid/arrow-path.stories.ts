import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowPathSvelte from '../../../lib/24/solid/arrow-path.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowPathSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowPathSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPath: Story = {}
