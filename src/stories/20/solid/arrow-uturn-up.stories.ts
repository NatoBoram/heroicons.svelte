import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnUp as ArrowUturnUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnUp: Story = {}
