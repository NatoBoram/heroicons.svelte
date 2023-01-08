import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowPath as ArrowPathSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowPathSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowPathSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPath: Story = {}
