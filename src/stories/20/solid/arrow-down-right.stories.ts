import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownRight as ArrowDownRightSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownRight: Story = {}
