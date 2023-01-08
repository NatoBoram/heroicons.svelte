import type { Meta, StoryObj } from '@storybook/svelte'
import { Trophy as TrophySvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: TrophySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrophySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trophy: Story = {}
