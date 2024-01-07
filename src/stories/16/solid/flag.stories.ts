import type { Meta, StoryObj } from '@storybook/svelte'
import FlagSvelte from '../../../lib/16/solid/flag.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FlagSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FlagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Flag: Story = {}
