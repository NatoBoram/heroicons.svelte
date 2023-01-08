import type { Meta, StoryObj } from '@storybook/svelte'
import { RectangleStack as RectangleStackSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: RectangleStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RectangleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleStack: Story = {}
