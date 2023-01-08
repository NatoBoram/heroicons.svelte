import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsPointingIn as ArrowsPointingInSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowsPointingInSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsPointingInSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingIn: Story = {}
