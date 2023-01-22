import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnUpSvelte from '../../../lib/24/solid/arrow-uturn-up.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUturnUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnUp: Story = {}
