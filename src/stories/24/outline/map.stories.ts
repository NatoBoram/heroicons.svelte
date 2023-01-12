import type { Meta, StoryObj } from '@storybook/svelte'
import { Map as MapSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: MapSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Map: Story = {}
