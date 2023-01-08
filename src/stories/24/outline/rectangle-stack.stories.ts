import type { Meta, StoryObj } from '@storybook/svelte'
import { RectangleStack as RectangleStackSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: RectangleStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RectangleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleStack: Story = {}
