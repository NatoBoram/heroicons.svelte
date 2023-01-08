import type { Meta, StoryObj } from '@storybook/svelte'
import { Swatch as SwatchSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: SwatchSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SwatchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Swatch: Story = {}
