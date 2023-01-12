import type { Meta, StoryObj } from '@storybook/svelte'
import { SquaresPlus as SquaresPlusSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: SquaresPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SquaresPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SquaresPlus: Story = {}
