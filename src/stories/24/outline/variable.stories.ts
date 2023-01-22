import type { Meta, StoryObj } from '@storybook/svelte'
import VariableSvelte from '../../../lib/24/outline/variable.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: VariableSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VariableSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Variable: Story = {}
