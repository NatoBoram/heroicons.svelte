import type { Meta, StoryObj } from '@storybook/svelte'
import { Map as MapSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: MapSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Map: Story = {}
