import type { Meta, StoryObj } from '@storybook/svelte'
import ForwardSvelte from '../../../lib/24/solid/forward.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ForwardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ForwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Forward: Story = {}
