import type { Meta, StoryObj } from '@storybook/svelte'
import PauseSvelte from '../../../lib/16/solid/pause.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PauseSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pause: Story = {}
