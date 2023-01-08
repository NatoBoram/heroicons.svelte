import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowPath as ArrowPathSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowPathSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowPathSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPath: Story = {}
