import type { Meta, StoryObj } from '@storybook/svelte'
import { CursorArrowRays as CursorArrowRaysSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: CursorArrowRaysSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CursorArrowRaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRays: Story = {}
