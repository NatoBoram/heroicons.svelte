import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnRight as ArrowUturnRightSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowUturnRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnRight: Story = {}
