import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownRight as ArrowDownRightSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowDownRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownRight: Story = {}
