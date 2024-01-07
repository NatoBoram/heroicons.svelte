import type { Meta, StoryObj } from '@storybook/svelte'
import VariableSvelte from '../../../lib/16/solid/variable.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: VariableSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<VariableSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Variable: Story = {}
