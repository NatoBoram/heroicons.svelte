import type { Meta, StoryObj } from '@storybook/svelte'
import { Trophy as TrophySvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: TrophySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrophySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trophy: Story = {}
