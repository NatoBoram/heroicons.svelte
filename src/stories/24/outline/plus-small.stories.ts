import type { Meta, StoryObj } from '@storybook/svelte'
import { PlusSmall as PlusSmallSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: PlusSmallSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusSmall: Story = {}
