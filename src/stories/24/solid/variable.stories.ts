import type { Meta, StoryObj } from '@storybook/svelte'
import { Variable as VariableSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: VariableSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VariableSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Variable: Story = {}
