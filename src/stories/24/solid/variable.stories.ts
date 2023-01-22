import type { Meta, StoryObj } from '@storybook/svelte'
import VariableSvelte from '../../../lib/24/solid/variable.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: VariableSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VariableSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Variable: Story = {}
