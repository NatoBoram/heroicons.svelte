import type { Meta, StoryObj } from '@storybook/svelte'
import CubeTransparentSvelte from '../../../lib/20/solid/cube-transparent.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CubeTransparentSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CubeTransparentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CubeTransparent: Story = {}
