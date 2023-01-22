import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnUpSvelte from '../../../lib/20/solid/arrow-uturn-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnUp: Story = {}
