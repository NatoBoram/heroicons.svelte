import type { Meta, StoryObj } from '@storybook/svelte'
import { CubeTransparent as CubeTransparentSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CubeTransparentSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CubeTransparentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CubeTransparent: Story = {}
