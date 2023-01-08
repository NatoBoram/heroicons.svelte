import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnUp as ArrowUturnUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowUturnUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnUp: Story = {}
