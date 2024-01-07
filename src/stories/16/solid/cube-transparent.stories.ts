import type { Meta, StoryObj } from '@storybook/svelte'
import CubeTransparentSvelte from '../../../lib/16/solid/cube-transparent.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CubeTransparentSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CubeTransparentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CubeTransparent: Story = {}
