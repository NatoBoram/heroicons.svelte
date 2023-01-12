import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowRightOnRectangle as ArrowRightOnRectangleSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowRightOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowRightOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightOnRectangle: Story = {}
