import type { Meta, StoryObj } from '@storybook/svelte'
import CubeSvelte from '../../../lib/20/solid/cube.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CubeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CubeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cube: Story = {}
