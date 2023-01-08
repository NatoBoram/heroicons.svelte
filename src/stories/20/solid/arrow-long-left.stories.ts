import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLongLeft as ArrowLongLeftSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowLongLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLongLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongLeft: Story = {}
