import type { Meta, StoryObj } from '@storybook/svelte'
import TrophySvelte from '../../../lib/20/solid/trophy.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: TrophySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TrophySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trophy: Story = {}
