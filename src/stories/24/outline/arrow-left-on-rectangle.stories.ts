import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLeftOnRectangle as ArrowLeftOnRectangleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLeftOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftOnRectangle: Story = {}
