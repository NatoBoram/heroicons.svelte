import type { Meta, StoryObj } from '@storybook/svelte'
import { Square3Stack3d as Square3Stack3dSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Square3Stack3dSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Square3Stack3dSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square3Stack3d: Story = {}
