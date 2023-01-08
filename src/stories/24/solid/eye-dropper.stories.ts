import type { Meta, StoryObj } from '@storybook/svelte'
import { EyeDropper as EyeDropperSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: EyeDropperSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EyeDropperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeDropper: Story = {}
