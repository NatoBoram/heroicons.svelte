import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLeftOnRectangle as ArrowLeftOnRectangleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowLeftOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLeftOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftOnRectangle: Story = {}
