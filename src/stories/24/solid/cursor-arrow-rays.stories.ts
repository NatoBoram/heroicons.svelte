import type { Meta, StoryObj } from '@storybook/svelte'
import { CursorArrowRays as CursorArrowRaysSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CursorArrowRaysSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CursorArrowRaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRays: Story = {}
