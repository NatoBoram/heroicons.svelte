import type { Meta, StoryObj } from '@storybook/svelte'
import TrophySvelte from '../../../lib/16/solid/trophy.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TrophySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TrophySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trophy: Story = {}
