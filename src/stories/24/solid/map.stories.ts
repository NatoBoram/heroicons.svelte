import type { Meta, StoryObj } from '@storybook/svelte'
import MapSvelte from '../../../lib/24/solid/map.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: MapSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Map: Story = {}
