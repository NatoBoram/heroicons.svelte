import type { Meta, StoryObj } from '@storybook/svelte'
import MapPinSvelte from '../../../lib/16/solid/map-pin.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MapPinSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MapPinSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MapPin: Story = {}
