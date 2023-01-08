import type { Meta, StoryObj } from '@storybook/svelte'
import { MapPin as MapPinSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: MapPinSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MapPinSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MapPin: Story = {}
