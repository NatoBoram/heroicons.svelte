import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallUp as ArrowSmallUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowSmallUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowSmallUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallUp: Story = {}
