import type { Meta, StoryObj } from '@storybook/svelte'
import CursorArrowRippleSvelte from '../../../lib/24/solid/cursor-arrow-ripple.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CursorArrowRippleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CursorArrowRippleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRipple: Story = {}
