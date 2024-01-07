import type { Meta, StoryObj } from '@storybook/svelte'
import BackspaceSvelte from '../../../lib/16/solid/backspace.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BackspaceSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BackspaceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backspace: Story = {}
