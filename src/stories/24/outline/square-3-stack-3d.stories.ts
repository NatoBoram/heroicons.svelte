import type { Meta, StoryObj } from '@storybook/svelte'
import { Square3Stack3d as Square3Stack3dSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: Square3Stack3dSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Square3Stack3dSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square3Stack3d: Story = {}
