import type { Meta, StoryObj } from '@storybook/svelte'
import { Stop as StopSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: StopSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<StopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Stop: Story = {}
