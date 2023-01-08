import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronUp as ChevronUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChevronUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUp: Story = {}
