import type { Meta, StoryObj } from '@storybook/svelte'
import { CursorArrowRipple as CursorArrowRippleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CursorArrowRippleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CursorArrowRippleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRipple: Story = {}