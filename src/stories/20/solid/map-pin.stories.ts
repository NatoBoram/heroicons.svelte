import type { Meta, StoryObj } from '@storybook/svelte'
import { MapPin as MapPinSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: MapPinSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MapPinSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MapPin: Story = {}
