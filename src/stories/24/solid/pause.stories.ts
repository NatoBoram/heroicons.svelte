import type { Meta, StoryObj } from '@storybook/svelte'
import { Pause as PauseSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PauseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pause: Story = {}
