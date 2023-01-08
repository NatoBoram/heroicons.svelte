import type { Meta, StoryObj } from '@storybook/svelte'
import { PlusSmall as PlusSmallSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PlusSmallSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusSmall: Story = {}
