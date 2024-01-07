import type { Meta, StoryObj } from '@storybook/svelte'
import ForwardSvelte from '../../../lib/16/solid/forward.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ForwardSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ForwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Forward: Story = {}
