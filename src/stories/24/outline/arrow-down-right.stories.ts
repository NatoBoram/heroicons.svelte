import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownRight as ArrowDownRightSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownRight: Story = {}
