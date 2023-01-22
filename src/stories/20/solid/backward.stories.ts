import type { Meta, StoryObj } from '@storybook/svelte'
import BackwardSvelte from '../../../lib/20/solid/backward.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BackwardSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BackwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backward: Story = {}
