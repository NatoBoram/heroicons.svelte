import type { Meta, StoryObj } from '@storybook/svelte'
import PaperAirplaneSvelte from '../../../lib/24/outline/paper-airplane.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PaperAirplaneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PaperAirplaneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperAirplane: Story = {}
