import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsPointingIn as ArrowsPointingInSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowsPointingInSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowsPointingInSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingIn: Story = {}
