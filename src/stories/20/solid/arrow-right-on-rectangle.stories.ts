import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowRightOnRectangle as ArrowRightOnRectangleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowRightOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowRightOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightOnRectangle: Story = {}
