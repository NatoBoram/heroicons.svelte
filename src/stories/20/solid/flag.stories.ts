import type { Meta, StoryObj } from '@storybook/svelte'
import { Flag as FlagSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: FlagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FlagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Flag: Story = {}
