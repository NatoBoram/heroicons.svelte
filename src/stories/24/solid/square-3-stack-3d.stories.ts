import type { Meta, StoryObj } from '@storybook/svelte'
import Square3Stack3dSvelte from '../../../lib/24/solid/square-3-stack-3d.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: Square3Stack3dSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Square3Stack3dSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square3Stack3d: Story = {}
