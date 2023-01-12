import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowRight as ArrowRightSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRight: Story = {}
