import type { Meta, StoryObj } from '@storybook/svelte'
import CursorArrowRippleSvelte from '../../../lib/16/solid/cursor-arrow-ripple.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CursorArrowRippleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CursorArrowRippleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRipple: Story = {}
