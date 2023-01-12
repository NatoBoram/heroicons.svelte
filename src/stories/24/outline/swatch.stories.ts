import type { Meta, StoryObj } from '@storybook/svelte'
import { Swatch as SwatchSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: SwatchSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SwatchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Swatch: Story = {}
