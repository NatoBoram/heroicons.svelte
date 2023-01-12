import type { Meta, StoryObj } from '@storybook/svelte'
import { CubeTransparent as CubeTransparentSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CubeTransparentSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CubeTransparentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CubeTransparent: Story = {}
