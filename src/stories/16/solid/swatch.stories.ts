import type { Meta, StoryObj } from '@storybook/svelte'
import SwatchSvelte from '../../../lib/16/solid/swatch.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SwatchSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SwatchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Swatch: Story = {}
