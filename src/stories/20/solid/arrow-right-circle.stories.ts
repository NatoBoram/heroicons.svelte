import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowRightCircle as ArrowRightCircleSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowRightCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowRightCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightCircle: Story = {}
