import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsPointingOut as ArrowsPointingOutSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowsPointingOutSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsPointingOutSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingOut: Story = {}