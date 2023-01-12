import type { Meta, StoryObj } from '@storybook/svelte'
import { CursorArrowRays as CursorArrowRaysSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CursorArrowRaysSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CursorArrowRaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRays: Story = {}
