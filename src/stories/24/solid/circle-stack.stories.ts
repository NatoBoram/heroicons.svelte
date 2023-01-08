import type { Meta, StoryObj } from '@storybook/svelte'
import { CircleStack as CircleStackSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: CircleStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CircleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CircleStack: Story = {}
