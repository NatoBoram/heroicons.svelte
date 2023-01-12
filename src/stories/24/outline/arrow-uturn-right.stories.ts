import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnRight as ArrowUturnRightSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUturnRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnRight: Story = {}
