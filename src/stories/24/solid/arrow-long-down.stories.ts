import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLongDown as ArrowLongDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLongDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongDown: Story = {}
