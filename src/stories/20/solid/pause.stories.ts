import type { Meta, StoryObj } from '@storybook/svelte'
import PauseSvelte from '../../../lib/20/solid/pause.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PauseSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pause: Story = {}
