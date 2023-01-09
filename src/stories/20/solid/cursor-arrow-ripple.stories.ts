import type { Meta, StoryObj } from '@storybook/svelte'
import { CursorArrowRipple as CursorArrowRippleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CursorArrowRippleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CursorArrowRippleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CursorArrowRipple: Story = {}