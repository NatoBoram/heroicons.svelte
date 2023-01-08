import type { Meta, StoryObj } from '@storybook/svelte'
import { PlusCircle as PlusCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PlusCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle: Story = {}
