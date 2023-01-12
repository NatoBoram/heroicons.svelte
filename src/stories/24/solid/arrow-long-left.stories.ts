import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLongLeft as ArrowLongLeftSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLongLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongLeft: Story = {}
