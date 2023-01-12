import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleRight as ChevronDoubleRightSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDoubleRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleRight: Story = {}
