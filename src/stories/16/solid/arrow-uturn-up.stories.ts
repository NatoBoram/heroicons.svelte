import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnUpSvelte from '../../../lib/16/solid/arrow-uturn-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUturnUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUturnUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnUp: Story = {}
