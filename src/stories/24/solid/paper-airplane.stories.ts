import type { Meta, StoryObj } from '@storybook/svelte'
import { PaperAirplane as PaperAirplaneSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PaperAirplaneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PaperAirplaneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperAirplane: Story = {}
