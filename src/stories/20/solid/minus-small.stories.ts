import type { Meta, StoryObj } from '@storybook/svelte'
import { MinusSmall as MinusSmallSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: MinusSmallSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MinusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusSmall: Story = {}
