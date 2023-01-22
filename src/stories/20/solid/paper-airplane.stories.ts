import type { Meta, StoryObj } from '@storybook/svelte'
import PaperAirplaneSvelte from '../../../lib/20/solid/paper-airplane.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PaperAirplaneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PaperAirplaneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperAirplane: Story = {}
