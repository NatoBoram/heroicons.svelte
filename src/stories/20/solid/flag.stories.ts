import type { Meta, StoryObj } from '@storybook/svelte'
import FlagSvelte from '../../../lib/20/solid/flag.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FlagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FlagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Flag: Story = {}
