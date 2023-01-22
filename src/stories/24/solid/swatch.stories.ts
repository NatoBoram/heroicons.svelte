import type { Meta, StoryObj } from '@storybook/svelte'
import SwatchSvelte from '../../../lib/24/solid/swatch.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: SwatchSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SwatchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Swatch: Story = {}
