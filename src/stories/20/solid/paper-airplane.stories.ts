import type { Meta, StoryObj } from '@storybook/svelte'
import { PaperAirplane as PaperAirplaneSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PaperAirplaneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PaperAirplaneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperAirplane: Story = {}
