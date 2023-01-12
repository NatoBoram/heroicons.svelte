import type { Meta, StoryObj } from '@storybook/svelte'
import { Cube as CubeSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CubeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CubeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cube: Story = {}
