import type { Meta, StoryObj } from '@storybook/svelte'
import ForwardSvelte from '../../../lib/20/solid/forward.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ForwardSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ForwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Forward: Story = {}
