import type { Meta, StoryObj } from '@storybook/svelte'
import { Flag as FlagSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: FlagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FlagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Flag: Story = {}
