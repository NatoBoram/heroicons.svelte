import type { Meta, StoryObj } from '@storybook/svelte'
import MapSvelte from '../../../lib/20/solid/map.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MapSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Map: Story = {}
