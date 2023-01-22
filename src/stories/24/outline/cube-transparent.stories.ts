import type { Meta, StoryObj } from '@storybook/svelte'
import CubeTransparentSvelte from '../../../lib/24/outline/cube-transparent.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CubeTransparentSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CubeTransparentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CubeTransparent: Story = {}
