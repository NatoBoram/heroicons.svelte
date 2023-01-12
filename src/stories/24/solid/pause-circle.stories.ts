import type { Meta, StoryObj } from '@storybook/svelte'
import { PauseCircle as PauseCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PauseCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PauseCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PauseCircle: Story = {}
