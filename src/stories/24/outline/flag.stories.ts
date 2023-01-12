import type { Meta, StoryObj } from '@storybook/svelte'
import { Flag as FlagSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FlagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FlagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Flag: Story = {}
