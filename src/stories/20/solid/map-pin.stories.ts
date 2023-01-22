import type { Meta, StoryObj } from '@storybook/svelte'
import MapPinSvelte from '../../../lib/20/solid/map-pin.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MapPinSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MapPinSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MapPin: Story = {}
