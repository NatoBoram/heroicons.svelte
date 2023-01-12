import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallLeft as ArrowSmallLeftSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowSmallLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowSmallLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallLeft: Story = {}
