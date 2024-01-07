import type { Meta, StoryObj } from '@storybook/svelte'
import CubeSvelte from '../../../lib/16/solid/cube.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CubeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CubeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cube: Story = {}
