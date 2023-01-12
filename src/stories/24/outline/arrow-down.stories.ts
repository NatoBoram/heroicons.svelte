import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDown as ArrowDownSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {}
