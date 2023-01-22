import type { Meta, StoryObj } from '@storybook/svelte'
import MapPinSvelte from '../../../lib/24/solid/map-pin.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: MapPinSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MapPinSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MapPin: Story = {}
