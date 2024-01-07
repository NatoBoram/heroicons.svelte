import type { Meta, StoryObj } from '@storybook/svelte'
import BackwardSvelte from '../../../lib/16/solid/backward.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BackwardSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BackwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backward: Story = {}
