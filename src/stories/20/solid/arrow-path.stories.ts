import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowPathSvelte from '../../../lib/20/solid/arrow-path.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowPathSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowPathSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPath: Story = {}
