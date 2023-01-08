import type { Meta, StoryObj } from '@storybook/svelte'
import { Pause as PauseSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PauseSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pause: Story = {}
