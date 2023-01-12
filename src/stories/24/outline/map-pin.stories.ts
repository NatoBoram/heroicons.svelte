import type { Meta, StoryObj } from '@storybook/svelte'
import { MapPin as MapPinSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: MapPinSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MapPinSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MapPin: Story = {}
