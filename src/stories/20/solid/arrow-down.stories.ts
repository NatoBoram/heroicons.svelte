import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDown as ArrowDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {}
