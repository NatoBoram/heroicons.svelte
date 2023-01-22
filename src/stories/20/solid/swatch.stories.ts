import type { Meta, StoryObj } from '@storybook/svelte'
import SwatchSvelte from '../../../lib/20/solid/swatch.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: SwatchSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SwatchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Swatch: Story = {}
