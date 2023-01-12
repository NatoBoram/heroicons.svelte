import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsPointingIn as ArrowsPointingInSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowsPointingInSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsPointingInSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingIn: Story = {}
