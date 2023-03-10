import type { Meta, StoryObj } from '@storybook/svelte'
import BackspaceSvelte from '../../../lib/20/solid/backspace.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BackspaceSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BackspaceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backspace: Story = {}
