import type { Meta, StoryObj } from '@storybook/svelte'
import VariableSvelte from '../../../lib/20/solid/variable.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: VariableSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<VariableSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Variable: Story = {}
