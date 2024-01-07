import type { Meta, StoryObj } from '@storybook/svelte'
import MapSvelte from '../../../lib/16/solid/map.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MapSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Map: Story = {}
