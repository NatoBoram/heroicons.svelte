import type { Meta, StoryObj } from '@storybook/svelte'
import { Pause as PauseSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PauseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pause: Story = {}
