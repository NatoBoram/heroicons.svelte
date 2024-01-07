import type { Meta, StoryObj } from '@storybook/svelte'
import CursorArrowRaysSvelte from '../../../lib/16/solid/cursor-arrow-rays.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CursorArrowRaysSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CursorArrowRaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRays: Story = {}
