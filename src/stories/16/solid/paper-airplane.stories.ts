import type { Meta, StoryObj } from '@storybook/svelte'
import PaperAirplaneSvelte from '../../../lib/16/solid/paper-airplane.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PaperAirplaneSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PaperAirplaneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperAirplane: Story = {}
